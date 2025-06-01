const fs = require('fs');
//Metodo CRIAR
/*if(!fs.existsSync('./public')) {
    fs.mkdirSync('./public', (err) =>{
        if(err) {
            throw err;
        }
        console.log('Pasta criada com sucesso!');

    })
}
else {
    console.log('A pasta *public* ja existe!')
}*/

//Metodo RENOMEAR
/*if(fs.existsSync('./public')) {
    fs.renameSync('./public', './bernardo', (err) =>{
        if(err) {
            throw err;
        }
        console.log('Pasta RENOMEADA com sucesso!');

    })
}
else {
    console.log('Impossivel RENOMEAR, pois a pasta *public* não existe!')
}*/

//Metodo DELETAR
if(fs.existsSync('./bernardo')) {
    fs.rm('./bernardo', {recursive: true}, (err) =>{
        if(err) {
            throw err;
        }
        console.log('Pasta DELETADA com sucesso!');

    })
}
else {
    console.log('Impossivel DELETAR, pois a pasta *bernardo* não existe!')
}


