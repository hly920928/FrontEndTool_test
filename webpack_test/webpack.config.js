const path = require('path');

module.exports = {
  entry: './src/entry_1.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundled.js'
  },
  mode:"development"
};