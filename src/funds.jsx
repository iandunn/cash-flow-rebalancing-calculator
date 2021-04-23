import React from 'react';
import './funds.css';

function Funds() {
	return (
		<div className="funds">
			<h4>Funds</h4>

			<table>
				<thead>
					<tr>
						<th>Investment</th>
						<th className="fund-amount">Amount</th>
						<th className="fund-allocation-tags">Allocation Tags</th>
						{/* wrap this column when need to shrink table to fit everything on one screen - how to specify that in css? */}
					</tr>
				</thead>

				<tbody>
					{/* convert to individual functions to avoid duplication - default values */}
					{/* setup alternating row bg color */}

					<tr className="amount-cell">
						<td>Cash</td>

						<td>
							{/* make this use Fund for DRYness? */}
							$<input type="number" value="500" min="0" placeholder="0" size="7" onChange={ value => value } />
						</td>

						<td></td>
					</tr>

					<Fund symbol="FXAIX" amount="3000" tags={ [ 'domestic' ] } />

					{/* want a way to say "deposit into these accounts, but not these" */}

					<Fund symbol="VTI" amount="15000" tags={ [ 'domestic', 'stock' ] } />
					<Fund symbol="FXAIX" amount="3000" tags={ [ 'domestic', 'stock' ] } />
					<Fund symbol="ESGV" amount="3000" tags={ [ 'domestic', 'stock', 'socially-responsible' ] } />
					<Fund symbol="BND" amount="500" tags={ [ 'domestic', 'bond' ] } />
					<Fund symbol="VXUS" amount="4000" tags={ [ 'international', 'stock' ] } />
					<Fund symbol="VSGX" amount="1000" tags={ [ 'international', 'stock', 'socially-responsible' ] } />
					<Fund symbol="FSPSX" amount="500" tags={ [ 'international', 'stock' ] } />
				</tbody>

				<tfoot>
					<tr>
						<td>
							<button>
								Add Fund
							</button>
						</td>
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
				{/* make onchange save to local storage */}
				$<input type="number" value={ amount } placeholder="0" size="7" onChange={ value => value } />
			</td>

			<td>
				{/*
					there's probably an npm package that doesn't something like WP's "Foo x" "Bar x" for displaying tags and being able to delete them
					maybe even from gutenberg

					include socially responsible as a default category to promote it. maybe setup sample data when user first starts, as an example of how it all works

					need to assign IDs to each tag, so can rename the label w/out changing existing entries
				*/}

				{ tags && tags.map( ( tag, index ) => {
					return (
						<span className="allocation-tag" key={tag}>
							{tag + ' [x] '}
						</span>

						//{tag} [x]

						//{ index < tags.length && ( ', ' ) }
					);
				} ) }
			</td>
		</tr>
	);
}

export default Funds;
