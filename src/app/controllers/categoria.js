/*
 * @Autor: Ian Rotondo Bagliotti 
 * @Data: 2019-02-10 17:34:33 
 * @Última modificação por: Ian Rotondo Bagliotti 
 * @Última hora modificada: 2019-02-10 17:34:33 
*/

const mongoose = require('mongoose')

const CategoriaModel = require('./../models/categoria')

class Categoria {
    get(req, res){
        CategoriaModel.find({}, (error, categoria) => {
            if(error)
                res.send(error)
            else
                res.json({data: categoria})
        })
    }
    getByID(req, res){
        CategoriaModel.findById(req.params.id, (error, categoria) => {
            if(error)
                res.send(error)
            else
                res.json({data: categoria})
        })
    }
    create(req, res){
        CategoriaModel.create(req.body, (error, categoria) => {
            if(error)
                res.send(error)
            else
                res.json({message: 'Categoria adicionada com sucesso!', data: categoria})
        })
    }
    update(req, res){
        CategoriaModel.updateOne({_id: req.params.id}, {$set: req.body}, (error, categoria) => {
            if(error)
                res.send(error)
            else
                res.json({message: 'Categoria atualizada com sucesso!', data: categoria})
        })
    }
    delete(req, res){
        CategoriaModel.deleteOne({_id: req.params.id}, (error, categoria) => {
            if (error)
                res.send(error)
            else
                res.json({message: 'Categoria deletada com sucesso!', data: categoria})
        })
    }
}

module.exports = new Categoria()