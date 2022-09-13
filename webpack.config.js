const path = require('path');
const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const postcssPresetEnv = require('postcss-preset-env');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, './src');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [postcssPresetEnv()],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: { filename: 'images/[hash][ext][query]' },
      },
      {
        test: /\.(eot|ttf|woff)$/,
        type: 'asset/resource',
        generator: { filename: 'fonts/[hash][ext][query]' },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(src, './index.html'),
    }),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new EnvironmentPlugin({
      API_URL: 'https://jsonplaceholder.typicode.com',
    }),
  ],
};
