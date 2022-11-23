const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry : {
    main : './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path : path.resolve(__dirname, './dist')
  },
  devtool : 'eval-cheap-source-map',
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader : 'babel-loader'
      },{
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },{
        test: /\.jfif$/,
        loader : 'file-loader',
        options: {
          name : '[name].[ext]'
        }
      }
    ]
  }, 
  devServer : {
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}