const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
  minify: {
    html5: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: false,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributese: true,
    useShortDoctype: true,
  }
})
module.exports = {
  entry: './src/index.js',
  output: {
    // path: path.resolve('dist'),
    // filename: 'index_bundle.js',
    // filename : 'style.css'
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass'), },
    ],

  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name]/styles.css', disable: false, allChunks: true }),
    HtmlWebpackPluginConfig,
  ]
}