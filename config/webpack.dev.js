const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "../", "public"),
    port: 3000,
    open: true,
    hot: true
  }
});
