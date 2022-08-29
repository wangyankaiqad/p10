// const { defineConfig } = Request("@vue/cli-service");

// let port = 8888;

// console.log(process.env);

// module.exports = defineConfig({
//   // 第三方依赖是否需要转移，避免出现第三方的转移
//   transpileDependencies: true,
//   // 是否在开发环境下通过 eslint-loader 在每次保存时 lint代码 这个值会在@cue/cli-plugin-eslint被安装之后生效
//   lintOnSave: false,
//   // 代理端口配置  以前我们写的时候 不用配置devServer代理端口 因为它有默认的 当我们需要配置的时候 我们就可以定义DevServer了
//   DevServer: {
//     // 上面定义了  这个是代理的地址
//     port,
//     // 配置代理
//     proxy: {
//       // [process.env.VUE_APP_API]  当我们logprocess.env的时候 我们在根目录下创建的，.env.development中配置的信息 其中VUE_APP_xxx(自己定义的名字) 配置的都会在process.env中显示出来
//       // 在这个三元表达式可以判断我们是否开启了mock数据  process.env.VUE_APP_MOCK_ENABLE === "true" 是我们在.env.development中配置的信息 要是为TRUE的话就执行mock数据  如果不是的话 就执行process.env.VUE_APP_CONSOLE_URL   其中这个api要和pathRewrite中的process.env.VUE_APP_API保持一一致
//       [process.env.VUE_APP_API]: {
//         target:
//           process.env.VUE_APP_MOCK_ENABLE === "true"
//             ? `http://localhost:9999`
//             : process.env.VUE_APP_CONSOLE_URL,
//         changeOrigin: true,
//         pathRewrite: {
//           ["^" + process.env.VUE_APP_API]: "",
//         },
//       },
//     },
//   },
// });

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
// 	transpileDependencies: true,
// 	lintOnSave: false,
// 	productionSourceMap: false,
// 	publicPath: './',//根目录
// 	outputDir: 'dist',//输出文件地址
// 	assetsDir: 'static',//静态资源文件放置
// 	devServer: {
// 		port: 8089,//端口号
// 		https: false,
// 		host: '0.0.0.0',
// 		open: true,
// 		// 配置代理
// --------------------------------------------------------------------
// 		proxy: {
// 			'/api': {
// 				changerOrigin: true,
// 				target:'http://www.baidu.com',
// 				pathRewrite: {
// 					'/api': ''
// 				}
// 			}
// 		}
// 	}
// })

// [process.env.VUE_APP_API]: {
//         target:
//           process.env.VUE_APP_MOCK_ENABLE === "true"
//             ? `http://localhost:9999`
//             : process.env.VUE_APP_CONSOLE_URL,
//         changeOrigin: true,
//         pathRewrite: {
//           ["^" + process.env.VUE_APP_API]: "",
//         },




// =============================================
const { defineConfig } = require('@vue/cli-service')
let port = 8888
console.log(process.env)
/**
 * 第一步 ：打印process.env
 * 第二部：查看NODE_ENV
 */
let target = process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:9999` : process.env.VUE_APP_CONSOLE_URL
console.log(target)

module.exports = defineConfig({
	// 第三方依赖是否需要转移，避免出现第三方的转移
	transpileDependencies: true,
	// 是否在开发环境下通过 eslint-loader 在每次保存时 lint代码，这个值会在@vue/cli-plugin-eslint 被安装之后生效
	lintOnSave: false,
	// 代理端口配置
	devServer: {
		// 代理的地址
		port,
		// 配置代理
		proxy: {
			// change xxx-api/login=>mock/login
			//detail:https://cli.vuejs.org/config/#devserver=proxy
			[process.env.VUE_APP_API]: {
				target: process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:9999` : process.env.VUE_APP_CONSOLE_URL,
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_API]: ''
				}
			}
		}
	}
})