const express = require('express');
const router = express.Router();

//carros/fiat/uno

router.get('/', (req, res)=> {
    res.send('<h1>Rota Carros</h1>');
});

router.get('/fiat', (req, res)=> {
    res.send('<h1>Rota Fiat</h1>');
});

router.get('/fiat/uno', (req, res)=> {
    res.send('<h1>Rota Uno</h1>');
});

module.exports = router;