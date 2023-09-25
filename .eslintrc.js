module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
		'airbnb',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'react',
		'i18next',
	],
	rules: {
		indent: [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'windows',
		],
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'always',
		],
		'react/jsx-filename-extension': [
			2, { extensions: ['.js', '.jsx', '.tsx'] },
		],
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'no-tabs': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'react/function-component-definition': 'off',
		'arrow-body-style': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'import/extensions': 'off',
		'react/require-default-props': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
	},
	globals: {
		IS_DEV: true,
	},
};
