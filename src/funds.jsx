import React, { useContext }                 from 'react';
import CurrencyInput                         from 'react-currency-input-field';
import { AccountContext, currencyFormatter } from './utilities.jsx';
import './funds.css';

export function Funds() {
	const { cash, funds } = useContext( AccountContext );
	let totalWithoutCash = 0;

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
							<CurrencyInput
								allowDecimals={ false }
								allowNegativeValue={ false }
								disableAbbreviations={ true }
								prefix="$"
								name="cach"
								placeholder="0"
								value={ 500 }
								size="7"
								onValueChange={ ( value, name ) => value }
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
							//* todo want to format amount, but also need it to be valid `number` input */}
						);
					} ) }
				</tbody>

				<tfoot>
					<tr>
						<th>Total</th>
						<th>{ currencyFormatter.format( totalWithoutCash ) }</th>
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
				<CurrencyInput
					allowDecimals={ false }
					allowNegativeValue={ false }
					disableAbbreviations={ true }
					prefix="$"
					name="input-name"
					placeholder="0"
					value={ amount }
					size="7"
					onValueChange={ ( value, name ) => value }
				/>
				{/* todo make onchange save to local storage */ }
			</td>

			<td>
				{/* todo
				use gutenberg component to display/add/delete tags

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
