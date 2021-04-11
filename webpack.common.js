const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        about:'./src/about.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: __dirname + "/src/index.html",
            myPageHeader: 'App',
            filename: "index.html",
            inject: "body",
            chunks: ['app'],
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: __dirname + "/src/index.html",
            myPageHeader: 'About',
            filename: "about.html",
            inject: "body",
            chunks: ['about'],
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
             {
        test: /\.(png|svg|jpg|jpeg|gif|JPG)$/,
         use: [
           'file-loader',
         ],
       },
        ],
    },
};