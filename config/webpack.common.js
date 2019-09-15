const path = require("path");

module.exports = {
  entry: "./src/index.js",
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
        options: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
          localsConvention: "camelCaseOnly"
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
  }
};
