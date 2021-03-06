const NODE_ENV = 'production' // process.env.NODE_ENV || 'local'

const path = require('path')
const webpack = require('webpack')
const Clean = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')
const webpackHtmlTemplate = require('html-webpack-template')
const pkg = require('./package.json')

const PATHS = {
  node_modules: path.join(__dirname, '/node_modules'),
  app: path.join(__dirname, '/src'),
  build: path.join(__dirname, '/public/js'),
  styleLess: path.join(__dirname, '/public/less', 'style.less'),
  styleCss: path.join(__dirname, '/public/css', 'style.css'),
}
module.exports = {
  entry: {
    app: `${PATHS.app}/index.js`,
    vendors: [
      'react',
      'react-router-dom',
      'react-dom',
      'request',
    ],
  },
  output: {
    path: PATHS.build,
    filename: `[name].v${pkg.version}.js`,
    publicPath: '/js/',
  },
  devtool: 'cheap-module-source-map',
  watch: true,
  module: {
    noParse: [
      /node_modules\/json-schema\/lib\/validate\.js/,
    ],
    rules: [
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader',
      //   exclude: PATHS.node_modules,
      // },
      {
        test: [/\.js$/, /\.jsx?$/, /\.es6$/],
        exclude: PATHS.node_modules,
        loader: 'babel-loader',
        include: PATHS.app,
        options: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['style-loader', 'css-loader?minimize']),

        include: PATHS.styleCss,
        exclude: PATHS.node_modules,
      },
      // {
      //   test: /\.less$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
      //   include: PATHS.styleLess,
      //   exclude: PATHS.node_modules,
      // },
      {
          test: /\.less$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "less-loader" // compiles Less to CSS
          }],
          include: PATHS.styleLess,
          exclude: PATHS.node_modules,
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        },
        exclude: PATHS.node_modules,
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
        exclude: PATHS.node_modules,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx'],
    modules: [PATHS.node_modules],
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    dns: 'empty',
    tls: 'empty',
  },

  plugins: [
    new Clean([
      'public/js',
      'public/css',
    ]),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
    // new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
    new HtmlWebpackPlugin({
      title: 'Haystack Image Managment | The only source you need for stock photograthy.',
      environment: NODE_ENV,
      inject: false,
      template: webpackHtmlTemplate,
      appMountId: 'haystack',
    }),
    new webpack.DefinePlugin({
      BROWSER_SUPPORTS_HTML5: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
      VERSION: JSON.stringify(pkg.version),
    }),
    new ExtractTextPlugin(`../css/style.v${pkg.version}.css`),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
     //OccurrenceOrderPlugin is now on by default
    //new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      sourceMap: true,
      mangle: false,
      minimize: true,
      //The compress.warnings option of the UglifyJsPlugin now
      //defaults to false instead of true. This means that if you
      //want to see uglifyjs warnings, you need to set compress.warnings to true.

      compress: {
        warnings: false,
      },
      output: { comments: false },
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]', // `[path].gz?v${pkg.version}`
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
}
