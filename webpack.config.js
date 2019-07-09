var path = require('path');
var srcPath = path.resolve(__dirname, "client");
var distPath = path.resolve(__dirname, "dist");

module.exports = {
    devtool: 'source-map',
    mode: "production",
    entry: [
        srcPath + "/app.tsx"
    ],
    output: {
        path: distPath,
        publicPath: '/',
        filename: "main.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
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