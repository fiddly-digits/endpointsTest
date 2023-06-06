const express = require('express');
const server = express();

// recibe dos parametros
// ruta
// callback
//   La callback recibe 2 parametros
//     request y respond

server.get('/', (request, response) => {
  response.write('Estamos en home');
  response.end();
});

server.post('/hola', (request, response) => {
  const { url, method } = request;
  response.write(`Estamos en hola en ${method}`);
  response.end();
});

server.delete('/hola', (request, response) => {
  const { url, method } = request;
  response.write(`Estamos en hola en ${method}`);
  response.end();
});

server.patch('/hola', (request, response) => {
  const { url, method } = request;
  response.write(`Estamos en hola en ${method}`);
  response.end();
});

server.listen(8080, () => {
  console.log('Nuestro servidor esta encendido');
});

/*
 * 3 Endpoints en la ruta hola
 */
