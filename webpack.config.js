var path = require('path');

module.exports = {
  entry: "./src/EventStream.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "xml-event-stream.js"
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