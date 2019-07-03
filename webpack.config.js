// import webpack from 'webpack'
const path = require('path');
const srcPath = path.resolve(__dirname, "client");
const distPath = path.resolve(__dirname, "public");

module.exports = {
    devtool: 'source-map',
    entry: [
        srcPath + "/app.js"
    ],
    output: {
        path: distPath,
        publicPath: '/',
        filename: "main.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                include: /client/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: /client/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }
        ]
    },
    devServer: {
        hot: true,
        port: 4500
    }
}