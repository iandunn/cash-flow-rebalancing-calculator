export const exampleData = {
	'accounts' : [
		{
			// todo might need to add an ID so can rename without losing connection to it? maybe not",
			// todo might need to make accounts an associative object instead of array so can access accounds
			// directly. same for `funds`",
			'name' : 'Roth IRA',
			'cash' : 500,
			// todo this isn't really even being used, maybe don't need it?
			// would need it if going to do the calc for the user, like instead of saying "this fund [which has $1000] is underweighted by $50", say "this fund should be $1050"

			'funds' : [
				{
					'symbol' : 'FXAIX',
					'amount' : 500,
					'tags'   : [ 'domestic', 'stock' ]
				},

				{
					'symbol' : 'VTI',
					'amount' : 5500,
					'tags'   : [ 'domestic', 'stock' ]
				},

				{
					'symbol' : 'ESGV',
					'amount' : 1000,
					'tags'   : [ 'domestic', 'stock', 'socially-responsible' ]
				},

				{
					'symbol' : 'BND',
					'amount' : 500,
					'tags'   : [ 'domestic', 'bond' ]
				},

				{
					'symbol' : 'VXUS',
					'amount' : 2000,
					'tags'   : ['international', 'stock' ]
				},

				{
					'symbol' : 'VSGX',
					'amount' : 200,
					'tags'   : [ 'international', 'stock', 'socially-responsible' ]
				},

				{
					'symbol' : 'FSPSX',
					'amount' : 300,
					'tags'   : [ 'international', 'stock' ]
				},

				// todo update amounts, etc once this is working. probably have 10k total in account asd asd
			],

			// todo might need to add an ID so can rename without losing connection to it? maybe not
			'targetAllocations' : {
				'domestic'             : 75,
				'international'        : 25,
				'socially-responsible' : 10,
				'stock'                : 90,
				'bond'                 : 10
			}
		},

		{
			'name' : 'HSA',
			'cash' : 50,

			'funds' : [
				{
					'symbol' : 'VTI',
					'amount' : 150,
					'tags'   : ['domestic', 'stock']
				},

				{
					'symbol' : 'BND',
					'amount' : 50,
					'tags'   : ['domestic', 'bond']
				},
			],

			'targetAllocations' : {
				'domestic'             : 100,
				'stock'                : 85,
				'bond'                 : 15
				// todo make this different than the roth/total allocation - is hsa realistic example of that?
				//  if not rename to whatever is
			}
		}
	],

	// todo use this as default allocation when adding new account
	'portfolioTargetAllocations' : {
		'domestic'             : 80,
		'international'        : 20,
		'socially-responsible' : 10,
		'stock'                : 90,
		'bond'                 : 10
	}
};
