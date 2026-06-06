import path from 'path'
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default{
    mode:'development',
    entry: {
        app: './src/index.js'},
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/rent_ledger.html',
            filename: 'index.html'
        })
    ],

    module:{
        rules:[{
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
        }]
    }
}