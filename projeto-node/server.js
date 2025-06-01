const http = require('http');

const hostname = '127.0.0.1'; //localhost

const PORT = process.env.PORT || 3000;

const server = http.createServer(
    function(req, res){
        let url = req.url;

        if(url === '/'){
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end('<h1>Hello world!</h1>');
        }
        if (url ==='/teste'){
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html; charset= utf-8');
            res.end('<h1>Página teste!</h1>');
        }
        
    }
);

server.listen(PORT, hostname, function(){
    console.log(`O servidor está rodando em: http://${hostname}:${PORT}`);
});