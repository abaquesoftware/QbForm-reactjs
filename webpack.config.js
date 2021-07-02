const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/QbForm-reactjs.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'QbForm-reactjs.js',
    publicPath: '/dist/',
    library: 'QbForm',
    libraryTarget: 'umd',
    sourceMapFilename: 'QbForm-reactjs.map'
  },
 /*
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // extensions: ['.tsx'],
    alias: {
      React: path.resolve(__dirname, '../node_modules')
    }
  },
  */
  /*
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  */
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'tslint-loader',
        enforce: 'pre',
        exclude: [ "/node_modules/"]
      },
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
        exclude: [/node_modules/]
      },   
    ]
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
        filename: 'QbForm-reactjs.js.map'
      }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
     }
    })
  ]
}

module.exports = config
