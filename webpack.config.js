var HtmlPlugin = require('html-webpack-plugin'), // 自动生成html
    ExtractTextPlugin = require('extract-text-webpack-plugin'), // 分离css
    BabiliPlugin = require('babili-webpack-plugin'), // 压缩打包后的js或使用命令行webpack -p进行压缩
    Webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + '/src/main',
        vendor: ['jquery']
    },
    output: {
        filename: '[name].js', // 若hardcode为bundle会报"Conflict: Multiple assets emit to the same filename bundle.js"
        path: __dirname + '/dist'
    },
    // 检查文件大小与提示
    performance: {
        hints: 'warning',
        maxEntrypointSize: 1024 * 500, 
        maxAssetSize: 1024 * 500
    },
    devServer: {
      compress: true,
      port: 8081,
      // 错误输出到浏览器
      overlay: {
        errors: true,
        warnings: false
      }
    },
    devtool: 'source-map', // js sourceMap
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true // css and sass sourceMap
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true // css and sass sourceMap
                    }
                }]
            }),
        }]
    },
    plugins: [
        new HtmlPlugin(),
        new ExtractTextPlugin('style.css'),
        // new BabiliPlugin(), // 使用sourcemap时，加入压缩插件会有问题
        new Webpack.optimize.CommonsChunkPlugin({
            name: ['common'] // 文件名，和合并到vendor
        }) // 公共部分代码优化合并
    ]
};