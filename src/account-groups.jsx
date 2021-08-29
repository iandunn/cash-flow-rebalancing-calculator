import React, { useContext }           from 'react';
import { MainContext, AccountContext } from './utilities.jsx';
import { Account }                     from './account';
import './account-groups.css';

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

			<button class="add-account-group">
				Add Account
			</button>
		</div>
	);
}
