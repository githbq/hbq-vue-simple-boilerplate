module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    'html'
  ],
  rules: {
    'semi': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
