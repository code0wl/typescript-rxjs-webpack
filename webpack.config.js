const path = require("path");

module.exports = {
    entry: "./main",
    resolve: {
        extensions: [".js", ".ts"]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /.ts$/,
            loader: "ts-loader"
        }]
    }
};