var webpack = require('webpack');
var config = {
	entry:__dirname + "/app/scripts/index.js",
	output: {
		path:__dirname+"/dist/",
		filename:'bundle.js'
	},
	devServer: {
    	historyApiFallback: {
    		index:"index.html"
    	}
  	},
	module: {
		loaders:[
			{
				test:/\.js?$/,
				exclude:/(node_modules)/,
				loader:"babel-loader",
				query:{
					presets:['es2015','react','stage-2']
				}
			},
			{
				test:/\.css?$/,
				loader:"style-loader"
				
			},
			{
				test:/\.css?$/,
				loader:"css-loader",
				options: {
       				modules: true,
       				localIdentName: '[path][name]__[local]--[hash:base64:5]'
     			}
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
				options: {
              		limit: 8192
            	}
			}
		]
	}
}

module.exports = config;