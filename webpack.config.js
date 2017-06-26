const webpack = require('webpack');

module.exports = {
    entry: './src/Main.js',
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/i
            }
        ]
    }
};
