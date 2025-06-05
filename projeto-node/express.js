const express = require('express');

//Requisição do modulo de rotas CARROS.
const carros = require('./routes/carros.js');

//Recebe TUDO que tem express
const app = express();

//Config
const PORT = process.env.PORT || 3000;
/*
//GET, POST, PUT, DELETE
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

//Rotas
app.use('/carros', carros);*/


//MIDDLEWARES
app.get('/', (req, res, next)=> {
    console.log('Eu sou um MIDDLEWARE!')
    next();
})

app.get('/', (req, res, next)=> {
    console.log('Eu sou o segundo MIDDLEWARE!')
    next();
})

app.get('/', (req, res)=> {
    res.send('<h1>PÁGINA INCIAL</h1>')
})

//START SERVER
app.listen(PORT, ()=> {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});