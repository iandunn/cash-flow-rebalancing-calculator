import React          from 'react';
import { Allocation } from './allocation';
import { Funds }      from './funds';
import './account.css';

export function Account( { name } ) {
	return (
		<div className="account">
			<h3>{ name }</h3>

			<Funds />

			<Allocation type="account">
				<h4>Account Allocation</h4>
			</Allocation>
		</div>
	);
}
