const exp = require('express');
const http = require('http');
var colors = require('colors');

const server = exp();

server.get('/', (req, res) => res.send('Hola Mundo con Express y Nodejs'));

server.listen(3000, () => console.log('Server funcionando'.green));

/*
const server = function(req, res) {
    res.writeHead(200, {contentType: 'text/html'});
    res.write('Hola mundo');
    res.end();
}

const callServer = http.createServer(server);

callServer.listen(3000, function respuesta() {
    console.log('Server en el puerto 3000'.green);
});
*/