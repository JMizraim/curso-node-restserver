const express = require("express");
const cors = require("cors");

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.usuarioPath = '/api/usuario';
    this.middlewares();
    this.routers();
  }

  middlewares() {
    this.app.use(cors()); //Cors (Invistigar)
    this.app.use(express.json()); //Lectura y parseo del body
    this.app.use(express.static('public')); //Servir contenido estático
  }

  routers() {
    this.app.use(this.usuarioPath, require("../routes/usuario"));
  }

  listen() {
      this.app.listen(this.port, ()=>{
          console.log(`Estoy escuando en http://localhost:${this.port}`)
      })
  }
}

module.exports = Server;