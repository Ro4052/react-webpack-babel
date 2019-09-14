require("dotenv").config();
const path = require("path");

const isDevelop = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.js",
  devtool: isDevelop ? "source-map" : "eval-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        query: {
          modules: true
        }
      },
      {
        test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
        loader: "file-loader",
        options: {
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx"
    ]
  },
  devServer: {
    contentBase: "public",
    port: 3000
  }
}
