module.exports = {
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  env: {
    browser: true,
    jest: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true
  },
  rules: {
    'react/prop-types': 'off',
    'comma-dangle': ['warn', 'always-multiline']
  }
};
