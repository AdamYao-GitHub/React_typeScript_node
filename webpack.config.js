var path = require('path');
var srcPath = path.resolve(__dirname, "dist");
var distPath = path.resolve(__dirname, "output");

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
            include: /dist/,
            loader: "babel-loader",
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: /dist/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'stage-2', 'react']
            }
        }, {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
        }
        ]
    },
    devServer: {
        hot: true,
        port: 4500
    }
}