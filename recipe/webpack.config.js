const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = (config) => {
  return merge(config, {
    resolve: {
      fallback: {
        zlib: require.resolve('browserify-zlib'),
        url: require.resolve('url/')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
    ],
  });
};
