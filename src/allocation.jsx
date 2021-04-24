import React, { useContext }    from 'react';
import { AccountContext }       from './contexts.js';
import './allocation.css';


export function Allocation( { children, type, funds = null, targetAllocations = null } ) {
	if ( 'account' === type && null === targetAllocations && null === funds ) {
		( { funds, targetAllocations } = useContext( AccountContext ) );
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
						<th>Target Percentage</th>
						<th>Actual Percentage</th>
						{/* maybe include columns for total amount and target amount?
						or is that only useful for debugging? */}
						<th>Drift</th>
						<th>Difference</th>
					</tr>
				</thead>

				{/* todo show in green if drift < 3%. or maybe 5% (vanguard recommendation)
				 orange if above - make configurable? maybe just make it 1% since this is buy-and-hold strategy */ }

				<tbody>
					{ Object.keys( currentAllocation ).length && Object.entries( currentAllocation ).map( ( [ name, amount ], index ) => {
						//console.log( name, amount );
						const targetAllocation = targetAllocations[ name ]; //todo
						const actualAllocation = ( amount / totalWithoutCash * 100 ).toFixed( 1 );

						return (
							<TagRow
								key={ index }
								name={ name } /* + ` - $${amount}` } */
								target={ targetAllocation }
								actual={ actualAllocation }
								drift={ ( targetAllocation - actualAllocation ).toFixed( 1 ) }
								difference={ ( totalWithoutCash * targetAllocation / 100 ) - amount }
							/>
						);
					} ) }
					{/*<TagRow name="Domestic" target={ 80 } actual={ 86 } difference={ 500 } />
					<TagRow name="International" target={ 20 } actual={ 14 } difference={ 100 } />
					<TagRow name="Socially Responsible" target={ 10 } actual={ 12 } difference={ 100 } />
					<TagRow name="Stock" target={ 90 } actual={ 92 } difference={ 800 } />
					<TagRow name="Bonds" target={ 10 } actual={ 8 } difference={ - 800 } />*/}
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

	//console.log(currentAllocation);

	// combine it w/ target alloc

	return currentAllocation;
}

function TagRow( { name, target, actual, drift, difference } ) {
	const className = drift >= 5 || drift <= - 5 ? 'drifted' : 'balanced';

	return (
		<tr>
			<td>{ name }</td>
			<td>
				<input
					className="target-allocation"
					type="number"
					value={ target }
					onChange={ value => value }
					min={ 0 }
					size={ 4 }
				/>
				%
			</td>
			<td className={ className }>{ actual }%</td>
			<td className={ className }>{ drift }%</td>
			<td className={ className }>${ difference }</td>
		</tr>
	);
}
