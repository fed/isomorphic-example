var loaders = ['babel'];

module.exports = {
  devtool: 'eval',
  entry: './app-client.js',
  output: {
    path: 'dist/',
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: loaders,
      exclude: /node_modules/
    }]
  },
  devServer: {
    inline: true,
    port: 6789,
    historyApiFallback: true
  },
  stats: {
    colors: true
  }
};
