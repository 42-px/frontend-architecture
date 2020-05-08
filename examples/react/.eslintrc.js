module.exports = {
  root: true,
  env: {
    browser: true,
  },
  rules: {
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-continue': 0,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': 0,
    'consistent-return': 0,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 'off',
    'semi': [2, 'never'],
    '@typescript-eslint/ban-ts-ignore': 0,
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'src/**/*.spec.ts',
        'src/**/*.spec.js',
      ],
    }],
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.jsx', '.tsx'],
    }],
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'import'],

  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
