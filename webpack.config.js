const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js',
  }, // 번들 파일 결과물 이름
  devtool: 'eval-cheap-source-map',
  // source map -> develop 환경에서 번들링되지 않은 코드를 확인할 수 있는 기능
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 파일 인식 방법
        exclude: '/node_modules/', // node_modules는 제외한다.
        use: 'babel-loader', // babel-loader 사용해서 변환
      },
      {
        test: /\.p?s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', 'postcss-js']],
              },
            },
          },
        ],
      },
      {
        test: /\.jfif$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: { extensions: ['.js', '.json', '.jsx', '.css'] },
  devServer: {
    port: 3000,
    historyApiFallback: true, // https://basemenks.tistory.com/270
    /**
     * 오류가 날 시에 404 대신 index.html을 호출할 수 있게해주는 옵션, React는 single page application이기 때문에
     * 단순하게 경로 입력으로 페이지 변경이 안된다.
     * */
  },
};
