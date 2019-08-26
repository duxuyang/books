const isProduction = process.env.NODE_ENV === 'production';
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	// 基本路径
	publicPath: './',
	productionSourceMap: false,
	lintOnSave: false, 
	parallel: require('os').cpus().length > 1,//启用并行化
	devServer: {
      //port: 8888, // 端口
      open: true, // 自动开启浏览器
     compress: false, // 开启压缩
    },
	 chainWebpack:config=>{
		 if (isProduction) {
		  config.plugins.delete('prefetch')  // 删除预加载
		  config.plugins.delete('preload');  // 删除预加载
		  config.optimization.minimize(true);// 压缩代码
		  config.optimization.splitChunks({ // 分割代码
			chunks: 'all'
		  })
    }
	},
    configureWebpack: config => {
		if (isProduction) {
		  config.plugins.push(
			  //生产环境自动删除console
			  new UglifyJsPlugin({
				uglifyOptions: {
				  compress: {
					drop_debugger: true,
					drop_console: true//注释console
				   // pure_funcs:['console.log'] // 移除console
				  },
				},
				sourceMap: false,
				parallel: true,//多进程提高打包速度
			  })
			);
		}
	}

}