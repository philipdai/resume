/**
 * Created by phoenixyartoo on 9/19/15.
 */
module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel" }
    ]
  }
};