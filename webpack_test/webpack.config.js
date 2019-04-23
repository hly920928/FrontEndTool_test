const path = require('path');
const webpackBuildIn=require("webpack");
const hwp=require("html-webpack-plugin");
const cleaner=require("clean-webpack-plugin");
const uglifyjs=require("uglifyjs-webpack-plugin");
module.exports = {
  entry: {
    entry_file:'./src/entry_1.js',
   /*  m1:'./src/module_1.js',
    m2:'./src/module_2.js' */
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].bundled.js',
    publicPath:"" ,//must clear to use webpack-dev-server public file dir,relative to "path"
    chunkFilename: '[name].chunk.js'//chunk name setting for lazy loading
  },
  devtool:"inline-source-map",
  devServer:{
     contentBase:"./dist",
     hot:true,
     port:27585

  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      },
    {
      test:/\.(jpg|jpeg|png|gif)$/,
      use:{
        loader:"file-loader"
      }
    },
    {
      test:require.resolve("jquery"),
      use:{
        loader:"expose-loader",
        options:"$"
      }
    }
    ]
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: { //bundle common file into a common file
                name: "commons",
                chunks: "all",
                minChunks: 2
            }
        }
    }
},
  plugins:[ 
    new webpackBuildIn.BannerPlugin("hello from webpackBuildIn.BannerPlugin"),
    new hwp({template:"./template_1.html"}),//relative to this file
    new cleaner(),
    new uglifyjs(),
  /*   new webpackBuildIn.optimize.CommonsChunkPlugin({name:"common"}), */
    new webpackBuildIn.HotModuleReplacementPlugin()
  ]
     
,
 /*   mode:"production", */
  mode:"development"
};