const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    mode: 'production',
    entry: {
        index: './src/index.ts',
    },
    target: 'node',
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin([ 'build' ]),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader'
                }
            },
        ],
    },
    optimization: {
        // https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
        namedModules: true,
        minimize: false,
        concatenateModules: false,
        splitChunks: {
            // https://webpack.js.org/plugins/split-chunks-plugin/
            // minChunks: 1,
            minSize: 0,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    }
};

module.exports = config;
