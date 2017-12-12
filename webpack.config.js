var HtmlPlugin = require('html-webpack-plugin'), // 自动生成html
    ExtractTextPlugin = require('extract-text-webpack-plugin'); // 分离css

module.exports = {
    entry: __dirname + '/src/main',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
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
        new ExtractTextPlugin('style.css')
    ]
};