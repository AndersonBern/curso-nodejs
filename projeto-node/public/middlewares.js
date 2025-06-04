const express = require('express');

const app = express();

const PORTA = process.env.PORTA || 3001;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORTA, ()=> {
    console.log(`O servidor esta rodando em: https://localhost:${PORTA}`);
});