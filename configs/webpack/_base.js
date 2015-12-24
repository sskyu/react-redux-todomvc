import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import projectConfig from '../project';

const webpackConfig = {
  entry: {
    app: [
      `${projectConfig.srcPath}/index.js`
    ]
  },
  output: {
    path: projectConfig.distPath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_mobules/
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${projectConfig.srcPath}/index.html`,
      filename: 'index.html',
      hash: true,
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
};

export default webpackConfig;
