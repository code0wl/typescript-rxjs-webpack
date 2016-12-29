module.exports = {
    entry: './main',
    output: { filename: 'bundle.js' },
    resolve: ['js', 'ts', ''],
    module: {
        loaders: [{
            test: /.ts$/,
            loader: 'ts-loader'
        }]
    }
}