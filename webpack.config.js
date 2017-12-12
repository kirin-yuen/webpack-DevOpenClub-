var HtmlPlugin = require('html-webpack-plugin'), // 自动生成html
    ExtractTextPlugin = require('extract-text-webpack-plugin'), // 分离css
    BabiliPlugin = require('babili-webpack-plugin'); // 压缩打包后的js或使用命令行webpack -p进行压缩

module.exports = {
    entry: __dirname + '/src/main',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    // 检查文件大小与提示
    performance: {
        hints: 'error',
        maxEntrypointSize: 1024 * 200, 
        maxAssetSize: 1024 * 500
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, 'sass-loader']
            }),
        }]
    },
    plugins: [
        new HtmlPlugin(),
        new ExtractTextPlugin('style.css'),
        new BabiliPlugin()
    ]
};