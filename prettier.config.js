/** @type {import('prettier').Config} */
module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  singleQuote: true,
  printWidth: 110,
  plugins: [require('prettier-plugin-tailwindcss')],
};
