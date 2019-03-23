var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
    entry: {
        b: "./src/main.js",
        a: "./src/a.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name]-min.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "demo1.html",
            inject: "body",
            chunks: ["b"]
        })
    ]
};

module.exports = config;
