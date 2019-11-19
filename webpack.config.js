const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        common: './src/scss/common.scss',    
        colorsType: './src/pages/colors-type/colors-type.js',
    },
    output: {
            path: path.resolve(__dirname, 'build')
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
			filename: 'index.html',
			template: './src/index.pug',
			chunks: ['common']
		}),

		new HtmlWebpackPlugin({
			filename: 'pages/colors-type.html',
			template: './src/pages/colors-type/colors-type.pug',
			chunks: ['common', 'colorsType']
        }),
        
        new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: '[id].css'
        }),
        
        new CopyWebpackPlugin([
			{
				from: './src/img',
				to: './img'
			},
			{
				from: './src/fonts',
				to: './fonts'
			}
		]),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
		overlay: true,
    },
};