const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      loaders: [
				'style-loader',
				MiniCssExtractPlugin.loader,
        'css-loader'
      ]
		},
		{
			test: require.resolve('jquery'),
			use: [{
					loader: 'expose-loader',
					options: 'jQuery'
			},{
					loader: 'expose-loader',
					options: '$'
			}]
		},
		{
			test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
			use:[{
				loader: 'url-loader',
				options: {
					name: '[name].[ext]',
					publicPath:'img/'
				}
			}] }
		]
	},
	plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
}