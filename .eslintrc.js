// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'brace-style': ['error', '1tbs', { allowSingleLine: false }],
		curly: ['error', 'all'],
		'max-len': [
			'error',
			{
				code: 100,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
				tabWidth: 2,
			},
		],
		'operator-linebreak': ['error', 'after'],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: ['const', 'let'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
		],
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',
	},
};
