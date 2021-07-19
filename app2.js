const fs = require('fs');

fs.writeFile('./texto.txt', 'Hola mundo', function write(error) {
    if(error) {
        console.error();
    }
    console.log('Archivo creado');
});

fs.readFile('./texto.txt', function read(error, data) {
    if(error) {
        console.error();
    }
    console.log(data.toString());
});