
# Webpack-4 configuration setup with scss, lazyloading & dev server

## Intro

This is an webpack-4 configuration setup that can be used for develop & as well as for production.


## How to use!

1. Clone the repo

```
git clone https://github.com/techyaura/webpack4-configuration.git
```

2. Navigate to directory

```
cd webpack4-configuration
```

3. Install the Npm packages

```
	npm i
```

4. Start the local dev-server with hot-reloading

```
npm run develop
```

5. Generate Production build

```
	npm run build
```
## License

[MIT License](https://mit-license.org/)

css优化
mini-css-extract-plugin
将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap,只能用在webpack4中，
1.模块提取 
2.将多个css文件合并成单一css文件 =》主要是针对多入口，会产生多分样式文件，合并成一个样式文件，减少加载次数
optimization:{
	splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                styles: {
                    name: 'style',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
}
插件配置：
	new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[hash:5].css',
            // chunkFilename: "assets/css/[name].[hash:5].css",
    }),

3.优化样式文件，去重、压缩等处理
主要使用 optimize-css-assets-webpack-plugin 插件和 cssnano 优化器
cssnano 优化器具体做了哪些优化 可参考 官网
cssnano 优化器也可以在loader中配置，除了 不能去重 之外，其他效果等同，所以小编这里就只在plugin中配置了，免得在配置一遍
optimization:{
	 minimizer: [
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                // cssProcessorOptions: cssnanoOptions,
                cssProcessorPluginOptions: {
					preset: ['default', {
				        discardComments: {
				            removeAll: true,
				        },
				        normalizeUnicode: false
				    }]
				 },
                canPrint: true
            })
        ]
}
