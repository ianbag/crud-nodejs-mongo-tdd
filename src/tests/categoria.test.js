/*
 * @Autor: Ian Rotondo Bagliotti 
 * @Data: 2019-02-10 17:44:33 
 * @Última modificação por: Ian Rotondo Bagliotti 
 * @Última hora modificada: 2019-02-10 17:44:33 
*/

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const server = require('./../../server');
const CategoriaModel = require('./../app/models/categoria');
chai.use(chaiHttp);

const MOCK_CATEGORIA_DEFAULT = {
    nome: 'Massas',
    descricao: 'Massas tradicionais da itália'
}
const MOCK_CATEGORIA_CADASTRAR = {
    nome: 'Bebidas',
    descricao: 'Bebidas quentes e geladas'
}

const MOCK_CATEGORIA_ATUALIZAR = {
    nome: 'Saladas',
    descricao: 'Saladas frescas e 100% orgânicas'
}

let CATEGORIA_DEFAULT_ID

describe('TDD Categoria', function () {
    this.beforeAll(async () => {
        await CategoriaModel.deleteMany({})
        const categoriaDefault = await CategoriaModel.create(MOCK_CATEGORIA_DEFAULT)
        CATEGORIA_DEFAULT_ID = categoriaDefault._id
    })

    describe('/GET: ', () => {
        it('Deve listar as categorias cadastradas: ', (done) => {
            chai.request(server).get('/categoria')
                .end((error, res) => {
                    const [{ nome, descricao }] = res.body.data
                    expect({ nome, descricao }).to.eql(MOCK_CATEGORIA_DEFAULT)
                    done()
                })
        })
    })

    describe('/GET/ID: ', () => {
        it('Deve listar uma categoria pelo ID: ', (done) => {
            chai.request(server).get(`/categoria/${CATEGORIA_DEFAULT_ID}`)
                .end((error, res) => {
                    const { nome, descricao } = res.body.data
                    expect({ nome, descricao }).to.eql(MOCK_CATEGORIA_DEFAULT)
                    done()
                })
        })
    })

    describe('/POST: ', () => {
        it('Deve adicionar uma categoria', (done) => {
            chai.request(server).post('/categoria')
                .send(MOCK_CATEGORIA_CADASTRAR)
                .end((error, res) => {
                    const { nome, descricao } = res.body.data
                    expect({ nome, descricao }).to.eql(MOCK_CATEGORIA_CADASTRAR)
                    done()
                })
        })
        it('Deve falhar ao adicionar uma categoria, por falta de preencher o nome obrigatório', (done) => {
            delete MOCK_CATEGORIA_CADASTRAR.nome
            chai.request(server).post('/categoria')
                .send(MOCK_CATEGORIA_CADASTRAR)
                .end((error, res) => {
                    expect(res.body.errors.nome.kind).to.eql('required')
                    done()
                })
        })
    })

    describe('/PUT: ', () => {
        it('Deve atualizar uma categoria', (done) => {
            chai.request(server).put(`/categoria/${CATEGORIA_DEFAULT_ID}`)
                .send(MOCK_CATEGORIA_ATUALIZAR)
                .end((error, res) => {
                    expect(res.body.data.nModified).to.eql(1)
                    done()
                })
        })
    })

    describe('/DELETE: ', () => {
        it('Deve deletar uma categoria', (done) => {
            chai.request(server).delete(`/categoria/${CATEGORIA_DEFAULT_ID}`)
                .end((error, res) => {
                    expect(res.body.data.n).to.eql(1)
                    done()
                })
        })
    })

})
