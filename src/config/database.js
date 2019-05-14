/*
 * @Autor: Ian Rotondo Bagliotti 
 * @Data: 2019-02-10 17:22:57 
 * @Última modificação por: Ian Rotondo Bagliotti 
 * @Última hora modificada: 2019-02-10 17:22:57 
*/
const mongoose = require("mongoose")

mongoose.connect("mongodb://ian123:git123@ds225375.mlab.com:25375/crudapinode", 
{ useNewUrlParser: true},
 (error) => {
     if(error)
        console.log('Falha ao conectar o MongoDB', error)
 })

 mongoose.connection.once("open", () => console.log("MongoDB Conectado!"))