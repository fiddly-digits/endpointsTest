const express = require('express');
const fsPromises = require('fs').promises;
const server = express();

/*
 * recibe dos parametros
 * ruta
 * callback - recibe 2 parametros
 *   - request
 *   - response
 */

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

/** Hacer un endpoint que lea un archivo y nos lo responda */

server.get('/file', async (request, response) => {
  const data = await fsPromises.readFile('./fileToRead.txt', 'utf8');
  response.send(data);
});
