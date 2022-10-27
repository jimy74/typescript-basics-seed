const path = require('path');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{ test: /\.tsx?$/, use: 'awesome-typescript-loader' }],
    },
    devServer: {
        port: 3000,
    },
};