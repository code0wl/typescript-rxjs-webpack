const path = require("path");

module.exports = {
    entry: "./app/main",
    resolve: {
        extensions: [".js", ".ts"]
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