var HtmlPlugin = require('html-webpack-plugin'); // 自动生成html

module.exports = {
    entry: __dirname + '/src/main',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true // 是否模块化，解决css选择器冲突
                }
            }, 'sass-loader']
        }]
    },
    plugins: [
        new HtmlPlugin()
    ]
};