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
/*if(fs.existsSync('./bernardo')) {
    fs.rm('./bernardo', {recursive: true}, (err) =>{
        if(err) {
            throw err;
        }
        console.log('Pasta DELETADA com sucesso!');

    })
}
else {
    console.log('Impossivel DELETAR, pois a pasta *bernardo* não existe!')
}*/

//VERIFICA SE NÃO EXISTE O ARQUIVO
/*if(!fs.existsSync('teste.txt')){

//CRIA ARQUIVO
    fs.writeFile('teste.txt', 'teste de conteúdo!', (err)=>{
        if(err){
            throw err;
        }
        console.log('Arquivo criado com sucesso!')
    })
}*/

//ADICIONAR CONTEÚDO AO ARQUIVO(OU CRIA) SEM SOBRESCREVER
/*fs.appendFile('teste.txt', '\nConteúdo ADICIONADO!', (err)=>{
    if(err){
        throw err;
    }
    console.log('Arquivo ATUALIZADO!');
})*/

//CRIA ARQUIVO VAZIO
/*fs.open('arquivo.txt', 'w', (err, file)=>{
    if(err) {
        throw err;
    }
    console.log('Salvo!')
})*/

//RENOMEAR ARQUIVOS
/*fs.rename('arquivo.txt', 'bernardo.txt', (err)=>{
    if(err) {
        throw err;
    }
    console.log('Arquivo RENOMEADO!');
})*/

//DELETAR ARQUIVOS
/*fs.unlink('bernardo.txt', (err)=>{
    if(err) {
        throw err;
    }
    console.log('Arquivo DELETADO!');
});*/