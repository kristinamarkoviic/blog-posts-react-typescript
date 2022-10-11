module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/no-empty-function': 0,
        'no-console': 'warn',
        eqeqeq: ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
};
