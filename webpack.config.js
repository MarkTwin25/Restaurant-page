import {resolve} from "path"
import HtmlWebpackPlugin from "html-webpack-plugin";

export default  {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve(import.meta.dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    watchFiles: ['src/**/*'], // 👈 ¡ESTO ES VITAL! Le dice que vigile TODO en la carpeta src, incluyendo tu HTML.
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
      rules: [
          {
            test: /\.css$/i, // Si el archivo termina en .css...
            use: ['style-loader', 'css-loader'], // ...usa estos loaders
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          }
        ],
  }
};