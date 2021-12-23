module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		"next/core-web-vitals",
		"plugin:react/recommended",
		"google",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
	},
	plugins: ["@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"require-jsdoc": [
			"error",
			{
				require: {
					FunctionDeclaration: false,
					MethodDefinition: true,
					ClassDeclaration: true,
					ArrowFunctionExpression: true,
					FunctionExpression: false,
				},
			},
		],
	},
}
