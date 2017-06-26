const webpack = require('webpack');

module.exports = {
    entry: './src/DjangoExceptions.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'django-exceptions.js',
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
