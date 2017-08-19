
var webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin')

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry:'./src/app.js',
	output:{
		path:__dirname+'/build',
		filename:'app.js'
	},
	
	//配置热更新服务器
	devServer:{
		contentBase:'./build',
		host:'localhost',
		port:9000,
		historyApiFallback:false
	},
	
	
	plugins:[
		
		new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
		
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			filename:'index.html'
		}),
		
		
		//抽离文本，外部引入文件
		new ExtractTextPlugin({
			filename:'app.css',
			allChunks:true
		})
	],
	
	module:{
		loaders:[
			/*{//不抽离方式
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
			}*/
			
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]
				})
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader!sass-loader"
				})
			},
			
			/*{
				test:/\.js$/,
				loader:"jsx-loader"
			}*/
			
			{//编译jsx
				test:/\.js$/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}