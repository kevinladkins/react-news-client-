var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
