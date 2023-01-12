module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
  },
  plugins: ['eslint-plugin-react', 'eslint-plugin-react-hooks', 'jest', 'jest-dom'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
  },
  ignorePatterns: ['cypress/*'],
};
