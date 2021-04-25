import React, { createContext } from 'react';
import './utilities.css';

// todo make sure to only store global data in the context store
export const MainContext    = createContext( {} );
// todo should pass `exampleData` instead of empty obj?
export const AccountContext = createContext( {} );

export const currencyFormatter = new Intl.NumberFormat( 'en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0,
} );
// todo auto detect user language at least. might need UI setting to provide currency

export class ErrorBoundary extends React.Component {
	constructor( props ) {
		super( props );

		this.state = { hasError : false };
	}

	static getDerivedStateFromError() {
		return { hasError : true };
	}

	render() {
		if ( this.state.hasError ) {
			return (
				<div className="error-boundary">
					<h1>Error</h1>

					<p>This component cannot be displayed. Check the error console for details.</p>
				</div>
			);
		}

		return this.props.children;
	}
}
