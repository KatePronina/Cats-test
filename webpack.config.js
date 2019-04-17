/* global require __dirname module */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

let conf = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                      {
                        loader: 'css-loader', 
                        options: { sourceMap: true }
                      },
                      { 
                        loader: 'sass-loader', 
                        options: { sourceMap: true }
                      }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" ? 
                    false :
                    "inline-source-map";

    return conf;
};