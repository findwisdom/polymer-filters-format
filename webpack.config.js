const path = require('path');

module.exports = {
    mode:'production',
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        library: 'filterSrc',
        libraryTarget: 'umd',
        umdNamedDefine: true
    
        // filename: 'index.js',
        // path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
