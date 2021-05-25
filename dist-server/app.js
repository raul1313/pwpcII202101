"use strict";var _httpErrors=_interopRequireDefault(require("http-errors")),_express=_interopRequireDefault(require("express")),_path=_interopRequireDefault(require("path")),_cookieParser=_interopRequireDefault(require("cookie-parser")),_morgan=_interopRequireDefault(require("morgan")),_routes=_interopRequireDefault(require("./routes")),_users=_interopRequireDefault(require("./routes/users")),_webpack=_interopRequireDefault(require("webpack")),_webpackDevMiddleware=_interopRequireDefault(require("webpack-dev-middleware")),_webpackHotMiddleware=_interopRequireDefault(require("webpack-hot-middleware")),_webpackDev=_interopRequireDefault(require("../webpack.dev.config"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}//Webpack Modules
// Consultar el modo en que se esta ejecutando el programa 
const env=process.env.NODE_ENV||"development";// se crea la aplicacion express
var app=(0,_express.default)();//verificando el modo de ejecucion de la aplicacion 
if("development"===env){console.log("> Excecuting in Development Mode: Webpack Hot Reloading"),_webpackDev.default.entry=["webpack-hot-middleware/client?reload=true&timeout=1000",_webpackDev.default.entry],_webpackDev.default.plugins.push(new _webpack.default.HotModuleReplacementPlugin);// crer el compilador de webpack 
const a=(0,_webpack.default)(_webpackDev.default);//agregamos el middleware a la cadena de middlewares
//de nuestra aplicacion 
//agrega el webpack hot middleware
app.use((0,_webpackDevMiddleware.default)(a,{publicPath:_webpackDev.default.output.publicPath})),app.use((0,_webpackHotMiddleware.default)(a))}else console.log("> Excecuting in Production Mode......");// view engine setup       //(hbs= halderbals)
// es para que nos muestren las peticiones que hacen.
// comvierte el http a formato json.(es un conversor )
//para todas las peticiones de url.
//manejo de cookies
//este es uno de los mas importates
// catch 404 and forward to error handler
// error handler
app.set("views",_path.default.join(__dirname,"views")),app.set("view engine","hbs"),app.use((0,_morgan.default)("dev")),app.use(_express.default.json()),app.use(_express.default.urlencoded({extended:!1})),app.use((0,_cookieParser.default)()),app.use(_express.default.static(_path.default.join(__dirname,"..","public"))),app.use("/",_routes.default),app.use("/users",_users.default),app.use(function(a,b,c){c((0,_httpErrors.default)(404))}),app.use(function(a,b,c){// set locals, only providing error in development
// render the error page
c.locals.message=a.message,c.locals.error="development"===b.app.get("env")?a:{},c.status(a.status||500),c.render("error")}),module.exports=app;