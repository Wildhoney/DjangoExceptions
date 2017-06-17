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
            },
            {
                test: /\.purs$/,
                loader: 'purs-loader',
                exclude: /node_modules/,
                query: {
                    src: ['bower_components/purescript-*/src/**/*.purs', 'src/**/*.purs'],
                    bundleNamespace: 'DjangoExceptions'
                }
            }
        ]
    }
};
