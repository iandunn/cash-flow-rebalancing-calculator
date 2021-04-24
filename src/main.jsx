// External
import React, { StrictMode } from 'react';
import { render }            from 'react-dom';

// Internal
import { MainContext }   from './contexts.js';
import { exampleData }   from './example-data.js';
import { AccountGroups } from './account-groups';
import { Allocation }    from './allocation';
import './main.css';

// Clear the console before each HMR, so errors don't stack up and become hidden below the fold.
if ( import.meta.hot ) {
	// todo this takes effect for changes in _this files_, but not _all files_. grrrrrr
	// well, it also takes effect for `example-data`, but t doesn't for funds, allocations, etc

	/*
	* is this revelant?
	*
	* A module that "accepts" hot updates is considered an HMR boundary.

Note that Vite's HMR does not actually swap the originally imported module: if an HMR boundary module re-exports imports from a dep, then it is responsible for updating those re-exports (and these exports must be using let). In addition, importers up the chain from the boundary module will not be notified of the change.

This simplified HMR implementation is sufficient for most dev use cases, while allowing us to skip the expensive work of generating proxy modules.
* https://vitejs.dev/guide/api-hmr.html#hot-accept-cb
	* */
	import.meta.hot.accept( () => {
		console.clear();
		//console.log(  "-----\ncleared by main" );
	} );

	// this doesn't seem to work - https://vitejs.dev/guide/api-hmr.html#hot-accept-deps-cb
	//import.meta.hot.accept(
	//	[ './allocations.jsx', './funds.jsx' ],
	//	( () => {
	//		console.clear();
	//		console.log('yay? a');
	//	} )
	//);
}

render(
	<StrictMode>
		<Main />
	</StrictMode>,
	document.querySelector( 'main' )
);

function Main() {
	// todo pull from local storage or whatever is the best modern data store
	let userData = false;

	if ( !userData ) {
		userData = exampleData;
		// todo don't need to do this if pass example to `createContext()` ?
	}

	// maybe validate the data here, like going through and parseFloat() all numbers, so don't have to do that every time touch the data later on? todo

	const allFunds = [
		{
			'symbol' : 'FXAIX',
			'amount' : 6000,
			'tags'   : [ 'domestic', 'stock' ]
		},

		{
			'symbol' : 'VTI',
			'amount' : 30000,
			'tags'   : [ 'domestic', 'stock' ]
		},
	];
	// todo loop through userdata accounts and combine them. if have same symbol in multple accounts, need to sum their parts into 1 entry here

	return (
		<MainContext.Provider value={ userData }>
			<AccountGroups />

			<Allocation type="portfolio" funds={ allFunds } targetAllocations={ userData.portfolioTargetAllocations }>
				<h2>Total Portfolio Allocation</h2>
			</Allocation>
			{/* todo want to set in both, b/c can't assume will want the same allocation in each account */ }
		</MainContext.Provider>
	);
}
