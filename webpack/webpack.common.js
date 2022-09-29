const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // Our entry point, point to the index.jsx file
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  // This gives us the possiblity to ignore file extensions when importing
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // Other rules
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  // with output we specify the path and the name to our final bundle
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  // Web pack plugin that inject the bundle.js in the index.html file
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src",
          to: "build",
        },
      ],
    }),
  ],
  stats: "errors-only",
};
