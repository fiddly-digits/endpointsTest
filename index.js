const http = require('http');

const server = http.createServer((req, res) => {
  // * read server
  //console.log('request', req.headers);
  // console.log('method: ', req.method);
  // console.log('url: ', req.url);

  const { url, method } = req;

  if (method && url) {
    res.write(`Estamos en el endpoint de ${method} en ${url}`);
  }

  // 1er endpoint
  // if (method === 'GET' && url === '/hola') {
  //   res.write('Estamos en el endpoint de GET en hola');
  // }
  // // 2nd endpoint
  // if (method === 'GET' && url === '/adios') {
  //   res.write('Estamos en el endpoint de GET en adios');
  // }
  // //3er endpoint
  // if (method === 'POST' && '/hola') {
  //   res.write('Estamos creando algo en hola');
  // }

  // * El server lee la request y responde
  // res.write('Este es mi primer servidor en main');
  res.end();
});

//* Encender el server

server.listen(8080, () => {
  console.log('El server esta encendido');
});

/*
 * Terminar todos los metodos con la ruta /hola y con la ruta /adios
 * Optimizar los if con estructura de datos.
 */
