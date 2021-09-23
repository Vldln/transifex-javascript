const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: './src/transifexApi.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'node.transifexApi.js',
      library: 'transifexApi',
      libraryTarget: 'umd',
    },
    target: 'node',
    devtool: 'source-map',
  },
  {
    mode: 'development',
    entry: './src/transifexApi.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'browser.transifexApi.js',
      library: 'transifexApi',
      libraryTarget: 'umd',
    },
    target: 'web',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|dist)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [['@babel/transform-runtime']],
            },
          },
        },
      ],
    },
  },
];
