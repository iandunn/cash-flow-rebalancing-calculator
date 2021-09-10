// External
import React, { StrictMode } from 'react';
import { render }            from 'react-dom';

// Internal
import { MainContext }   from './utilities.jsx';
import { exampleData }   from './example-data.js';
import { AccountGroups } from './account-groups';
import { Allocation }    from './allocation';
import { ErrorBoundary } from './utilities';
import './main.css';

// Clear the console before each HMR, so errors don't stack up and become hidden below the fold.
// todo this only works in this file -- https://github.com/vitejs/vite/discussions/3143
if ( import.meta.hot ) {
	import.meta.hot.dispose( () => {
		console.clear();
	} );
}

class Main extends React.Component {
	constructor( props ) {
		super( props );

		// todo pull from local storage or whatever is the best modern data store
		let userData = false;

		if ( ! userData ) {
			userData = exampleData;
			// todo don't need to do this if pass example to `createContext()` ?
		}

		this.state = { userData: userData }
	}

	render() {
		// maybe validate the data here, like going through and parseFloat() all numbers, so don't have to do that every time touch the data later on? todo
		const { userData } = this.state;

		const allFunds = Object.values( userData.accounts ).reduce( ( accumulatedFunds, account ) => {
			return [ ...accumulatedFunds, ...account.funds ];
		}, [] );
		// todo if have same symbol in multiple accounts, need to sum their parts into 1 entry here?
		// looks fine to not sum them

		// what if a symbol has tags x,y,z in one account, but only x,z in another? (or some other mismatch?)
		// maybe force them to match by syncing when one is added
		// maybe need to normalize all the data structures like a relational db
		// maybe don't have to worry about that if don't sum them?
		// but that'd still be an error, just a user input error, so should still catch it
		// maybe just automatically update all instances of that account when they're changed for any of them
		//      that'd be better UX too, so don't have to manually update all


		return (
			<MainContext.Provider value={ userData }>
				<AccountGroups />

				<ErrorBoundary>
					<Allocation
						type="portfolio"
						funds={ allFunds }
						targetAllocations={ userData.portfolioTargetAllocations }
					>
						<h2>Total Portfolio Allocation</h2>
					</Allocation>
				</ErrorBoundary>
			</MainContext.Provider>
		);
	}
}

render(
	<StrictMode>
		<ErrorBoundary>
			<Main />
		</ErrorBoundary>
	</StrictMode>,
	document.querySelector( 'main' )
);
