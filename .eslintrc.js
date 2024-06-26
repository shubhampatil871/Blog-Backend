module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: 'airbnb-base',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'no-underscore-dangle': 'off',
    },
  };
  