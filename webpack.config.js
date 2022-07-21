const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    //入口
    entry:"./src/main.js",
    output:{
        //文件的输出路径
        path:path.resolve(__dirname,"dist"),
        //文件名
        filename:'main.js'
    },
    //加载器
    module:{
        rules: [
            {
                test: /\.css$/i, //只检测css文件
                use: [ 'style-loader', 'css-loader' ]
            },
              {
                // 处理html中img资源
                test: /\.html$/,
                loader: 'html-loader',
              },
        ]
    },
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            //模板
            template:path.resolve(__dirname,"public/index.html")
        }
        )
    ],
    //自动化
    devServer: {
        host:"localhost",
        port: "3000",
        open:true
      },
    //模式
    mode:"development"
}