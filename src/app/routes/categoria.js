/*
 * @Autor: Ian Rotondo Bagliotti 
 * @Data: 2019-02-10 17:34:12 
 * @Última modificação por: Ian Rotondo Bagliotti 
 * @Última hora modificada: 2019-02-10 17:34:12 
*/
const express = require('express')
const router = express.Router()

const CategoriaController = require('./../controllers/categoria')

router.get('/categoria', CategoriaController.get)
router.get('/categoria/:id', CategoriaController.getByID)
router.post('/categoria', CategoriaController.create)
router.put('/categoria/:id', CategoriaController.update)
router.delete('/categoria/:id', CategoriaController.delete)

module.exports = router