module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prefer-const': 'off'
  },
  globals: {
    window: 'off',
    document: 'off'
  }
}
