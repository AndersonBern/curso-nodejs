const express = require('express');

//Requisição do modulo de rotas CARROS.
const carros = require('./routes/carros.js');

//Recebe TUDO que tem express
const app = express();

//Config
const PORT = process.env.PORT || 3000;

//GET, POST, PUT, DELETE
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

//Rotas
app.use('/carros', carros);

//START SERVER
app.listen(PORT, ()=> {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});