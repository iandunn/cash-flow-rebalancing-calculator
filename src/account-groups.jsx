import React from 'react';
import Account from './account';
import './account-groups.css';

function AccountGroups() {
	//const [count, setCount] = useState( 0 );

	return (
		// maybe use css grid instead of tables? might need subgrids though?

		// there's probably some npm project that'll change the input[tyep=number] into a better formatted version with commas, dollar sign, etc.

		// groups of accounts

		// need buttons for editing the tags/groups
		// maybe also a button to reset & delete everything - but confirm() first. maybe add to todo list and save for later

		<AccountGroup />

	);
}

function AccountGroup() {
	return (
		<div className="account-group">
			<Account name="Roth IRA" />
			<Account name="HSA" />

			{/* move to css file */ }
			<button style={ { marginTop: '30px' } }>
				Add Account
			</button>
		</div>
	);
}

export default AccountGroups;
