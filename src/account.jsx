import React             from 'react';
import { Allocation }    from './allocation';
import { Funds }         from './funds';
import { ErrorBoundary } from './utilities';
import './account.css';

export function Account( { name } ) {
	return (
		<div className="account">
			<h3>{ name }</h3>

			<ErrorBoundary>
				<Funds />
			</ErrorBoundary>

			<ErrorBoundary>
				<Allocation type="account">
					<h4>Account Allocation</h4>
				</Allocation>
			</ErrorBoundary>
		</div>
	);
}
