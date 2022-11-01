const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: { path: path.resolve(__dirname, "build") },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "public") }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } },
        ],
      },
    ],
  },
};
