const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederartionPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederartionPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/bootstrap",
      },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
