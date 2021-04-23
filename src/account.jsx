import React from 'react';
import Allocation from './allocation';
import Funds from './funds';
import './account.css';

function Account( { name } ) {
	return (
		<div className="account">
			<h3>{ name }</h3>

			<Funds />

			<Allocation type="account" HeadingElement="h4" headingLabel="Account Allocation" />
		</div>
	);
}

export default Account;
