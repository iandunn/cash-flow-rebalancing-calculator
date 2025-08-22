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
	const { accounts } = useContext( MainContext );

	return (
		<div className="account-group">
			{ accounts && accounts.map( ( account, index ) => {
				return (
					<AccountContext.Provider key={ index } value={ account }>
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
