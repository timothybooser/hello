var webpack = require('webpack');

module.exports = {
    entry: "./scripts/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css" },
            {test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]},
            {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015']}}
        ]
    }
};
