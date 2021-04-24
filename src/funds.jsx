import React, { useContext } from 'react';
import { AccountContext }       from './contexts.js';
import './funds.css';

export function Funds() {
	const { cash, funds } = useContext( AccountContext );
	let totalWithoutCash = 0;

//asdf asd
	return (
		<div className="funds">
			<h4>Funds</h4>

			<table>
				<thead>
					<tr>
						<th>Investment</th>
						<th className="fund-amount">Amount</th>
						<th className="fund-allocation-tags">Allocation Tags</th>
						{/* todo wrap this column when need to shrink table to fit everything on one screen - how to specify that in css? */ }
					</tr>
				</thead>

				<tbody>
					<tr className="amount-cell">
						<td>Cash</td>

						<td>
							{/* todo make this use Fund for DRYness? */ }
							$
							<input
								type="number"
								value={ cash }
								min="0"
								placeholder="0"
								size="7"
								onChange={ value => value }
							/>
						</td>

						<td></td>
					</tr>

					{/* todo  want a way to say "deposit into these accounts, but not these" */ }

					{/* todo there's probably some npm project that'll change the input[tyep=number] into a better formatted version with commas, dollar sign, etc. */ }

					{/* todo need buttons for editing the tags/groups*/ }

					{ funds && funds.map( ( fund, index ) => {
						const { symbol, amount, tags } = fund;
						totalWithoutCash += amount;

						return (
							<Fund
								key={ index }
								symbol={ symbol }
								amount={ amount }
								tags={ tags }
							/>
						);
					} ) }
				</tbody>

				<tfoot>
					<tr>
						<th>Total</th>
						<th>${ totalWithoutCash }</th>
						<th></th>
					</tr>

					<tr>
						<th colSpan="3">
							{/* todo this shouldn't have bg color? but maybe the total row should? */}
							<button>
								Add Fund
							</button>
						</th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}

function Fund( { symbol, amount, tags } ) {
	return (
		<tr>
			<td>{ symbol }</td>

			<td className="amount-cell">
				{/* todo make onchange save to local storage */ }
				$
				<input type="number" value={ amount } placeholder="0" size="7" onChange={ value => value } />
			</td>

			<td>
				{/* todo
				 there's probably an npm package that doesn't something like WP's "Foo x" "Bar x" for displaying tags and being able to delete them
				 maybe even from gutenberg

				 include socially responsible as a default category to promote it. maybe setup sample data when user first starts, as an example of how it all works

				 need to assign IDs to each tag, so can rename the label w/out changing existing entries
				 */ }

				{ tags && tags.map( ( tag, index ) => {
					return (
						<span className="allocation-tag" key={ tag }>
							{ tag + ' [x] ' }
						</span>

						//todo {tag} [x]

						//todo { index < tags.length && ( ', ' ) }
					);
				} ) }
			</td>
		</tr>
	);
}
