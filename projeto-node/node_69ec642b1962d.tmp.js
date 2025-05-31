const http = require('http');

const hostname = '127.0.0.1'; //localhost

const PORT = process.env.PORT || 3000;

const server = http.createServer(
    function(req, res){
        
    }
);

server.listen(PORT, hostname, function(){
    console.log(`O servidor está rodando em: http://${hostname}:${PORT}`);
})