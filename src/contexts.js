import React, { createContext } from 'react';

export const MainContext    = createContext( {} );
	// todo should pass `exampleData` instead of empty obj?
export const AccountContext = createContext( {} );

// todo make sure to only store global data in the context store
