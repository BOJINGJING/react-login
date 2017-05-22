// webpack 2
const webpack = require("webpack");
// const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: __dirname +"/app/main.js",//唯一的入口文件
  output:{
    path: __dirname +"/public",//打包后文件存放的目录
    filename:'bundle.js' //打包后输入的文件名
  },
//  配置插件
  plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
                devServer: {
                    contentBase: "./public", //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    inline: true //实时刷新
                }
            }
        })
  ],

//  配置loaders：逻辑代码，和加载器
  module: {
    loaders: [
        //配置css
		{
			test: /\.css$/, 
			loader: 'style-loader!css-loader'
		},
	//配置图片
		{
			test: /(\.png|\.jpg|\.gpeg)$/,
			loader: 'url-loader？limit=20521&name=[name].[ext] '
        },
	//能够进行语法转换
		// {
		// 	test: /\.js$/,
		// 	loader: 'babel-loader',
		// 	query: {
		// 		presets: [ 'es2015' ],
		// 		plugins: [ 'transform-runtime' ]
		// 	}
		// }
        // babel 配置
        
        {
            test: /\.js$/, // 匹配loaders所处理的文件的拓展名的正则表达式
            exclude: /node_modules/, //手动添加不需要处理的文件(include 必须处理的文件【文件夹】)
            loader: 'babel-loader', //loader的名称
            query: { // 为loaders提供额外的设置选项
                presets: ['es2015', 'react'] // 有可能会报错 ===========
            }
        }
    ]
  }
}