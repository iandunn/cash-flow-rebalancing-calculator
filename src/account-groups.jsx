import React, { useContext }           from 'react';
import { MainContext, AccountContext } from './utilities.jsx';
import { Account }                     from './account';
import './account-groups.css';

// Clear the console before each HMR, so errors don't stack up and become hidden below the fold.
// todo this only works in this file -- https://github.com/vitejs/vite/discussions/3143
// todo replace w/ https://github.com/vitejs/vite/discussions/3143#discussioncomment-1717076 ?
if ( import.meta.hot ) {
	import.meta.hot.dispose( () => {
		console.clear();
	} );
}

export function AccountGroups() {
	const { setState } = useContext( MainContext );
	// this seems weird. use setstate for the component's local state, then update the context value to update app-wide context?
	const { accounts } = useContext( MainContext );

	// maybe create contextValue here that has single update function for all account values? maybe accepts param for which or something
	// then it updates the maincontect state
	// lower level wouldn't even need to know to know the account id

	// this couled use the maincontext.setstate as its update method
	// maybe rename it to updateaccounnt or something

	return (
		<div className="account-group">
			{ accounts && accounts.map( ( account, index ) => {
				const contextValue = {
					account       : account,
					updateAccount : ( newValues ) => {
						console.log( newValues );
						console.log( {account} );

						const updatedAccount = { ...account, ...newValues };

						// merge new values into existing account, then set state to update the accounts[0] w/ the merged value
							// need to know the ID
								// , which shouldn't just be the auto assignd array index b/c then can't rely on it not changing?

						// setState( { accounts: [ 0: {} ] } );
							// todo ^ causing bulid error. is something like ^ better for being able to access directly by index?
						setState( { accounts: [ {} ] } );

						// todo how to properly access the accounts[0].targetAllocations?
					}
				};

				return (
					<AccountContext.Provider key={ index } value={ contextValue }>
						<Account name={ account.name } />
					</AccountContext.Provider>
				);
			} ) }

			<button className="add-account-group">
				Add Account
			</button>
		</div>
	);
}

function updateAccount( newValues ) {
	//const { setState } = useContext( MainContext ); // can't call inside regular function, has to be function component?
	const { account } = useContext( AccountContext );

	console.log( {newValues} );
	console.log( {account} );

	// merge new values into existing account, then set state to update the accounts[0] w/ the merged value
		// need to know the ID
			// , which shouldn't just be the auto assignd array index b/c then can't rely on it not changing?


}
