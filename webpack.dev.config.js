const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
//0.Establecer el modo del configurador
mode: 'development',
//1.Especificando el archivo de entrada 
entry: './client/index.js',
//2.Especificando la salida 
output:{
//3 Ruta absoluta de la salida 
path: path.join(__dirname, 'public'),
//4 Nombre del archivo de salida
filename: 'js/bundle.js',
//5 Ruta del path publico para fines del servidor
publicPath: '/' 
},
devServer:{
    contentBase: path.join(__dirname, 'public'),
    port: 8881,
    host: 'localhost'
},
mode:{
rules:[
{
test: /\.js$/,
exclude: /(node_modules| bower_components)/,
use:[
    {
        loader: 'babel-loader',
        options:{
            presets: [
                [
                    '@babel/preset-env',
                    {
                        'modules':false,
                        'useBuiltIns': 'usage',
                        'targets':{"crome": "80"},
                        'corejs': 3
                    }
                ]
            ],
            "plugins":[
                [
                    "modules-resolver",
                    {
                        "root": ["./"],
                        "alias":{
                            "@client" : "./client",
                        }
                    }
                ]
            ]


        }
    }
]    
},
{
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
}
]

},
plugins:[
    new MiniCssExtractPlugin({
        filename: 'styles/app.css'
    })
]

}