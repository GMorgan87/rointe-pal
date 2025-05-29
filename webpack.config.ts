const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      assert: require.resolve('assert'),
      process: require.resolve('process/browser')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};
