var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000,
    proxy: {
        '/api/*': {
            target: 'http://localhost:5000',
            secure: false
        }
      }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: APP_PATH
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', "sass-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=40000'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        include: APP_PATH,
        exclude: /node_modules/
      }
    ]
  },
  // 出错以后就会采用source-map的形式直接显示你出错代码的位置
  devtool: '#eval-source-map',

  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ]
};