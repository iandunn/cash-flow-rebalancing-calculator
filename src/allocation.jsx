import React, { useContext }                 from 'react';
import { MainContext, AccountContext, currencyFormatter } from './utilities.jsx';
import './allocation.css';

// The percentage above which a portfolio is significantly out of balance
// `5` according to vanguard -- https://investornews.vanguard/rebalancing/
// `3` according to betterment, in order to trigger "sell/buy" rebalancing -- https://www.betterment.com/resources/portfolio-drift-rebalancing/
// todo maybe just make it 1% since this is cash-flow strategy?
const DRIFT_THRESHOLD = 5;

// Clear the console before each HMR, so errors don't stack up and become hidden below the fold.
// todo this only works in this file -- https://github.com/vitejs/vite/discussions/3143
// todo replace w/ https://github.com/vitejs/vite/discussions/3143#discussioncomment-1717076 ?
if ( import.meta.hot ) {
	import.meta.hot.dispose( () => {
		console.clear();
	} );
}

export function Allocation( { children, type, funds = null, targetAllocations = null } ) {
	let updateAccount, account;//shouldnt need this, smell of an error?

	if ( 'account' === type && null === targetAllocations && null === funds ) {
		( { account : { funds, targetAllocations }, updateAccount } = useContext( AccountContext ) );
	}

	const currentAllocation = getCurrentAllocation( funds, targetAllocations );

	const totalWithoutCash = Object.values( funds ).reduce( ( runningTotal, fund ) => {
		return runningTotal += fund.amount;
	}, 0 );

	return (
		<div className={ `allocation allocation-type-${ type }` }>
			{ children }

			{/* todo there's probably some npm project that'll change the input[tyep=number] into a better formatted version with commas, dollar sign, etc.*/ }

			{/* todo need buttons for editing the tags/groups*/ }

			{/*	todo need a way to set the ideal allocation*/ }

			{/* todo also test when cash = 0 */}

			<table>
				<thead>
					<tr>
						<th>Tag</th>
						<th>Target</th>
						<th>Actual</th>
						{/* maybe include columns for total amount and target amount?
						or is that only useful for debugging? */}
						<th>Drift</th>
						{/* todo maybe change ^ to be $50 (3.2), and then make below field action like `Buy $25`,
						 but that'd need the lazy optimum algorithm%*/}
						<th>Difference</th>
					</tr>
				</thead>

				<tbody>
					{ Object.keys( currentAllocation ).length && Object.entries( currentAllocation ).map( ( [ name, amount ], index ) => {
						const actualAllocation = ( amount / totalWithoutCash * 100 );
						const hasTarget        = undefined !== targetAllocations[ name ]; // sometimes you want to know the percent, but don't have a target in mind
						// todo also need to test for empty string once we start accepting user input, right?
						//     they may set one, then delete it, and that should be the same as never having set it
						const targetAllocation = hasTarget ? targetAllocations[ name ] : actualAllocation;
						const drift            = targetAllocation - actualAllocation;
						const difference       = ( totalWithoutCash * targetAllocation / 100 ) - amount;

						return (
							<TagRow
								key={ index }
								name={ name }
								targetPercent={ hasTarget ? targetAllocation : '' }
								actualPercent={ actualAllocation }
								drift={ drift }
								difference={ difference }
								updateAllocationTarget={ ( name, allocation ) => updateAccount( { targetAllocations: { name: allocation } } ) }
								/>
							);

							{/*
							// this isnn't very  good for a low level thing like this to have to know about the structure of higher level things
							should maybe just be accountContext.updateTargetAllocation( name, allocation ) ?
							*/}
					} ) }
				</tbody>
			</table>
		</div>
	);
}

// better name? todo
function getCurrentAllocation( funds, targetAllocation ) {
	// test when there's a fund that's not in the targetalloc and vice versa, including variation w/ porfoliotarget

	//const allTags           = Object.keys( targetAllocation );
	//allTags.map( key => currentAllocation[ key ] = 0 );
		// todo include the ones from funds? or just use the ones from the funds instead?
		// for total portfolio have to combine both funds(from all accounts) and portfoliotargetallocation

	const currentAllocation = {};

	funds.map( fund => {
		// lodash will do this for me? a

		fund.tags.map( tag => {
			if ( ! currentAllocation[ tag ] ) {
				currentAllocation[ tag ] = 0;
			}

			currentAllocation[ tag ] += parseFloat( fund.amount );
		} );
	} );

	// combine it w/ target alloc - wait, why? i thought i needed too, but then didn't
	// only needed for portolio alloc, not account alloc? no

	return currentAllocation;
}

function TagRow( { name, targetPercent, actualPercent, drift, difference, updateAllocationTarget } ) {
	//const { setState } = useContext( MainContext );
	const className = drift >= DRIFT_THRESHOLD || drift <= - DRIFT_THRESHOLD ? 'drifted' : 'balanced';

	return (
		<tr>
			<td>{ name }</td>

			<td>
				<input
					className="target-allocation"
					type="number"
					value={ targetPercent }
					onChange={ value => updateAllocationTarget( name, value ) }
						// setState( { userData: {} } ) }
					// todo working (i think), but doesn't feel good that this simple child func would need to have all of userData
						// whats a better way of updating a nested property inside an object inside state?
						// maybe pass in an account ID. this already knows the fund name (which is a unique id)
							// account name can be used instead of id, just need to enforce that it's unique
							// could pull from account context instead of having to pass in as prop
						// then it could be like updatefund( accountId, fundName, targetAllocation ) or something?

					// todo doesn't work yet b/c "value" would just override the entire state
					// need to do something like userData.accounts[ currentAccount ][ fund ].target = value
					// need to convert example datae to associative array, so can have direct access to it?
					// then can reference by account name/slug/id

					// maybe accountcontext should have an update command, so we update the value of accountcontext, and that updates ths main state?
					// that's adding an extra abstraction layer though
					// the parent could pass in the onupdate, or maybe even accountcontext.onupdateallocatino set by high level component somehow?
					// that seems like best, even though it kinda is adding layer of abstractio


					// add useCallback here and other react codebases?
					// https://dmitripavlutin.com/dont-overuse-react-usecallback/
					min={ 0 }
					size={ 4 }
				/>
				%
			</td>

			<td className={ className }>
				{ actualPercent.toFixed( 1 ) }%
				{/*- { currencyFormatter.format( amount ) }*/}
			</td>

			<td className={ className }>
				{ drift.toFixed( 1 ) }%
			</td>

			<td className={ className }>
				{ currencyFormatter.format( difference ) }
			</td>
		</tr>
	);
}
