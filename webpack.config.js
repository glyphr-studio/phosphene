var path = require('path');

module.exports = {
  entry: "./src/main.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel",
        query: {
          presets: ["es2015"],
          plugins: ["transform-flow-strip-types", "transform-class-properties"]
        },
        include: [
          path.join(__dirname, 'src')
        ]
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: [
          path.join(__dirname, 'src'),
        ],
      },

    ]
  },
  resolve: {
    extensions: ['','.js', '.json']
  }
};