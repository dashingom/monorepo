module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@brightlayer-ui/eslint-config/tsx'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  plugins: [
    // ...
    'react-hooks',
  ],
  rules: {
    // ...
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react/display-name': 'off',
  },
};
