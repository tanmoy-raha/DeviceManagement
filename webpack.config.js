const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin'); 
var path = require('path')
var webpack = require('webpack')
require("babel-polyfill");

var strBaseHref = "";
var strDistUrlPath = "/dist/";
//const LATEST_VERSION = 'v1.0'
const randVersion = Math.floor(Math.random() * 9000000000) + 1000000000
process.env.VUE_APP_BASE_ROUTE = strDistUrlPath;
 
if (process.env.NODE_ENV === 'production'){
  strDistUrlPath="";
  ///For SUBDOMAIN ONLY, Its contain subdomain name if exists
  strBaseHref = "/surfcss/";
  //strBaseHref = "/";
  process.env.VUE_APP_BASE_ROUTE = strDistUrlPath
}

module.exports = {
  entry: ["babel-polyfill",  './src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: process.env.VUE_APP_BASE_ROUTE,
    //filename: 'build.js'
    filename:  process.env.NODE_ENV === 'production' ? "[name].[chunkhash].js" : 'build.js?v='+ randVersion
    //filename: '[name].[chunkhash].js',
  },
  plugins: [
  ///Copy all the image file from src/assets and past in the dist folder with folder
  new CopyWebpackPlugin([
      { from: './src/assets/images', to:'src/assets/images'},
      { from: './src/assets/css/evopdf', to:'src/assets/css/evopdf'},
  ]),
  ///Create Dynamic Index.html in Dist Folder From Template 
  new HtmlWebpackPlugin({
    title: "DeviceMgmt",
    hash:true,
    template: './src/index.template.ejs',
  }),
  ///For Add BaseHref in dist > Index.html 
  new BaseHrefWebpackPlugin({ baseHref: strBaseHref}),
  ///Output "<base href="/subDomainName/">" it will add in dist > index.html page header
], 
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader?importLoaders=1&limit=100000'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // you can also read from a file, e.g. `variables.scss`
              data: `$color: red;`
            }
          }
        ],
      },
      {
        test: /\.less$/,
        use: [{
            loader: "vue-style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader",
            options: {
                javascriptEnabled: true
            }
        }]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        //Create the environment for production
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify(process.env.API_URL),
        ASSET_PATH: JSON.stringify(strBaseHref),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true,
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
  ])
}
