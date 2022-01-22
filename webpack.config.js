var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'https://localhost:44338'
        })
    }
}