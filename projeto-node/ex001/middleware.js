const usuarioLogado = true;

function middleware(req, res, next) {
    if(!usuarioLogado){
        res.redirect('/');
    }
    next();
};

module.exports = middleware;