/*
 * @Autor: Ian Rotondo Bagliotti 
 * @Data: 2019-02-10 17:34:16 
 * @Última modificação por: Ian Rotondo Bagliotti 
 * @Última hora modificada: 2019-02-10 17:34:16 
*/

const {Schema, model} = require("mongoose")

const CategoriaSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    descricao: {
        type: String,
        required: true,
        trim: true,
        maxlength: 250
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = model('categoria', CategoriaSchema)