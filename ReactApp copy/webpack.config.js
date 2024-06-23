let path = require("path"), //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'), //to load the index html file on request

config = {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 9090,
        historyApiFallback : false //localhost:9090/user
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /nodeModules/,
                use: ['style-loader', 'css-loader']
            },
            {
                
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    exclude: /nodeModules/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'assets',
                            },
                        },
                    ],
                
                
                
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin({ template: './index.html' })] //localhost:9090 - loads this html
}

module.exports = config;