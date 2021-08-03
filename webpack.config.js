const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 3000,
        watchContentBase: true
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        alias: {
            App: path.resolve(__dirname, 'src/App/'),
            Counter: path.resolve(__dirname, 'src/App/Counter/'),
            IconColorChanger: path.resolve(__dirname, 'src/App/IconColorChanger/'),
            icons: path.resolve(__dirname, 'src/assets/icons/'),
            images: path.resolve(__dirname, 'src/assets/images/'),
        }
    },

    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}