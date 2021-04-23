import React from 'react';
import ReactDOM from 'react-dom';
import AccountGroups from './account-groups';
import Allocation from './allocation';
import exampleData from './example-data.json';
import './main.css';

ReactDOM.render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>,
	document.querySelector( 'main' )
);

function Main() {
	// todo pull from local storage or whatever is the best modern data store
	let userData = false;

	if ( ! userData ) {
		userData = exampleData;
	}

	return (
		<>
			<AccountGroups data={ userData } />

			<Allocation type="portfolio" HeadingElement="h2" headingLabel="Total Portfolio Allocation" />
			{/*	maybe need a AccountAllocation and GlobalAllocation?
			maybe need to separate settting it from showing it
			no, want to set in both, b/c can't assume will want the same allocation in each account
			*/}
		</>
	);
}
