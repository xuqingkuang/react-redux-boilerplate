const os = require('os');

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': ['error', os.platform() === 'win32' ? 'windows' : 'unix'],
    'import/no-named-as-default': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
