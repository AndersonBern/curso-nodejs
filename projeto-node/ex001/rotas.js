const express = require('express');

const rotas = express.Router();

rotas.get('/', (req, res) => {
    res.send('<h1>Página principal</h1>');
});

rotas.get('/restrita', (req, res) => {
    res.send('<h1>Página RESTRITA</h1>');
});

rotas.get('/restrita/usuario', (req, res)=>{
    res.send('<h1>Página USUÁRIO RESTRITA</h1>');
});

module.exports = rotas;