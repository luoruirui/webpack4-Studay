let path  =require('path');
let  HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry: {
      a:'./src/a.js',
      b:'./src/b.js'
    },
    output: {
        filename: "[name]-[hash]-[chunk]-index.js",
        path: path.resolve('./dist')
    },
    module:{
        rules: [
            // {test: /\.js/,use:'babel-loader', exclude:/node_modules/},
            // {test: /\.css/,use:["style-loader","css-loader"]},
            // {test: /\.less/,use:["style-loader","css-loader","less-loader"]},
            // {test:/\.(jpg|gif|png)/,use:url-loader}

            {test:/\.css$/, loader: 'style-loader!css-loader！postcss-loader', include: '/src'},
            {test:/\.less$/, loader: 'style-loader!css-loader！postcss-loader!less-loader'},
            {test:/\.(jpg|gig|png)$/, loader: 'url-loader', options: {limit:8192}},
            {test:/\.(jpg|gig|png)$/, use:'file-loader'},


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
            inject: "body",
            chunks:["a"]
        })
    ]
};