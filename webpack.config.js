const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: ['@babel/polyfill', './src/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'bin_dev'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: './bin_dev'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			bodymovin: 'bodymovin',
			jQuery: 'jquery',
			range: 'rangeslider.js',
			knob: 'jquery-knob',
			sp: 'cpr_scrollpath',
			lottie: 'lottie-web',

		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),		
    // new CopyWebpackPlugin([
    //   {from:'src/js/datax',to:'js'} 
    // ]), 		
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		]
	},

};
