const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    module: {
        rules: [
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        },
        {
            test: /\.s?css$/,
            loader: [
                MiniCssExtractPlugin.loader,
                'css-loader?url=false',
                'sass-loader'
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.pug',
        }),
        new MiniCssExtractPlugin('style.css'),
    ],
    devServer: {
    stats: 'errors-only'
    }
};