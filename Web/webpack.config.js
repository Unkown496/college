'use strict'

// Картинки 600/300

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
    
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'articles.html',
        template: "./src/pages/articles.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'figma.html',
        template: "./src/pages/figma.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'ui.html',
        template: "./src/pages/ui.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'page.html',
        template: "./src/pages/page.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'info.html',
        template: "./src/pages/info.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'make.html',
        template: "./src/pages/make.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: '@webdiscus/pug-loader',
        options: {
          method: 'render',
          pretty: true
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './assets/[name].[ext]',
            },
          }
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [{
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}