"use strict";var express=require("express"),router=express.Router();/* GET home page. */ /* Agregando nuevba ruta*/router.get("/",function(a,b){b.render("index",{title:"Express",author:" Gonzalez Mendoza Raul ",appName:"WebApp",company:"Awsome Software"})}),router.get("/greeting",function(a,b){b.status(200).json({message:"Hola campeon de la fullstack web"})}),module.exports=router;