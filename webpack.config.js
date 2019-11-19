const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        common: './src/scss/common.scss',    
        colorsType: './src/pages/colors-type/colors-type.js',
        cards: './src/pages/cards/cards.js',
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
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
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

        new HtmlWebpackPlugin({
			filename: 'pages/cards.html',
			template: './src/pages/cards/cards.pug',
			chunks: ['common', 'cards']
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
            },
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
		overlay: true,
    },
};