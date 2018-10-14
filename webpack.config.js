const path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: {
    app: ["./main.js"]
  },
  output: {
    path: path.join(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
