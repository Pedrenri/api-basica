const port = 3003

const express = require('express')
const app = express()
const dataBase = require('./database.js')
const bodyParser = require( 'body-parser')

app.use(bodyParser.urlencoded({extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(dataBase.getProdutos())
})

app.get('/produtos/:id', (req, res , next) => {
    res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos' , (req,res,next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
} )

app.delete('/produtos/:id', (req, res, next) => {
    const produto = dataBase.excluirProduto(req.params.id)
    res.send(produto) //JSON
} )

app.listen(port, () => {
    console.log(`Servidor executando na porta: ${port}.`)
})



