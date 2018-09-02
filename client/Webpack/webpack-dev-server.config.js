const Webpack = require('webpack');
const path = require('path');
const CONFIG = require('./config/development');

const PATHS = require('./webpack.config').PATHS;

module.exports = {
    entry: {
        recipes: [
            PATHS.recipes
        ],
        addrecipe: [
            PATHS.addrecipe
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: CONFIG.HOST + '/static/scripts',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
            }
        ]
    },
    plugins: [
        new Webpack.DefinePlugin(CONFIG)
    ]
};


/*
module.exports = {
    entry: {
        app_js: [
            rootAssetPath + '/scripts/recipes.jsx'
        ],
        app_css: [
            rootAssetPath + '/styles/site.css'
        ]
    },
    output: {
        path: out + '/public',
        publicPath: 'http://localhost:2992/assets/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [
                    /node_modules/
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.js$/i, loader: 'script-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(jpe?g|png|gif|svg([\?]?.*))$/i,
                loaders: [
                    'file?context=' + rootAssetPath + '&name=[path][name].[hash].[ext]',
                    'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(ico|map)$/i,
                loaders: [
                    'file?context=' + rootAssetPath + '&name=[path][name].[hash].[ext]'
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                loaders: [
                    'font-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new ManifestRevisionPlugin(path.join(out, 'manifest.json'), {
            rootAssetPath: rootAssetPath,
            ignorePaths: ['/styles', '/scripts']
        })
    ]
};
*/