import React from 'react';
import './allocation.css';

function Allocation( { type, HeadingElement, headingLabel } ) {
	//const [count, setCount] = useState( 0 );

	return (
		<div className={ `allocation allocation-type-${type}` }>
			<HeadingElement>
				{headingLabel}
			</HeadingElement>

			{/*maybe use css grid instead of tables? might need subgrids though?*/}

			{/*there's probably some npm project that'll change the input[tyep=number] into a better formatted version with commas, dollar sign, etc.*/}

			{/*tags of accounts*/}

			{/*need buttons for editing the tags/groups*/}
			{/*maybe also a button to reset & delete everything - but confirm() first. maybe add to todo list and save for later*/}

			{/*<p>*/}
			{/*	need a way to set the ideal allocation*/}

			{/*	want to show results for each account*/}

			{/*	but also want to show results for all accounts combined*/}
			{/*</p>*/}

			<table>
				<thead>
					<tr>
						<th>Tag</th>
						<th>Target Percentage</th>
						<th>Actual Percentage</th>
						<th>Drift</th>
						<th>Difference</th>
					</tr>
				</thead>

				{/* show in green if drift < 3%, orange if above - make configurable? maybe just make it 1% since this is buy-and-hold strategy */}

				{/* put dollar sign in front of diffence */}

				<tbody>
					<tr>
						<td>Domestic</td>
						<td>80%</td>
						<td className="drifted">84%</td>
						<td className="drifted">4%</td>
						<td className="drifted">$500</td>
					</tr>

					<tr>
						<td>International</td>
						<td>20%</td>
						<td className="drifted">16%</td>
						<td className="drifted">-4%</td>
						<td className="drifted">-$100</td>
					</tr>

					<tr>
						<td>Socially Responsible</td>
						<td>10%</td>
						<td className="balanced">11%</td>
						<td className="balanced">1%</td>
						<td className="balanced">$100</td>
					</tr>

					<tr>
						<td>Stocks</td>
						<td>90%</td>
						<td className="balanced">92%</td>
						<td className="balanced">2%</td>
						<td className="balanced">$800</td>
					</tr>

					<tr>
						<td>Bonds</td>
						<td>10%</td>
						<td className="balanced">8%</td>
						<td className="balanced">-2%</td>
						<td className="balanced">$-800</td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td>
							<button>
								Add View
							</button>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}

export default Allocation;
