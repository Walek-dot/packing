const path = require('path');
const { merge } = require("webpack-merge");

const common = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  
  },
};

const prod = {
  mode: "production",
};

const dev = {
  mode: "development",

  devServer: {
    port:3003,
    publicPath: "/",
    contentBase: path.join(__dirname, "dist"),
  }
};

module.exports = merge(common, prod, dev);