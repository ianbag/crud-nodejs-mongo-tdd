/*
 * @Autor: Ian Rotondo Bagliotti 
 * @Data: 2019-02-10 17:23:05 
 * @Última modificação por: Ian Rotondo Bagliotti 
 * @Última hora modificada: 2019-02-10 17:23:05 
*/

const express = require("express")
const app = express()
const bodyParser = require('body-parser')

const database = require('./src/config/database')
const CategoriaRoute = require('./src/app/routes/categoria')

const PORT = 3000

/*
    CONFIG bodyParser
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));


app.get('/', (req, res) =>{
    res.send({message: 'CRUD API NodeJS'})
})

app.use('/', CategoriaRoute)

app.use('*', (req, res) => res.send({message: 'API não encontrada'}))

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}!`))

module.exports = app