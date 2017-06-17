const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].js',
        libraryTarget: 'var'
    },
    module: {
        loaders: [
            {
                test: /\.purs$/,
                loader: 'purs-loader',
                exclude: /node_modules/,
                bundleNamespace: 'DjangoExceptions',
                query: {
                    psc: 'psa',
                    src: ['bower_components/purescript-*/src/**/*.purs', 'src/**/*.purs']
                }
            }
        ]
    }
};
