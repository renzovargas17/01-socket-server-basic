const express = require("express");
const cors = require('cors')
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const pathToPublic = path.resolve(__dirname, "../public");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = socketio(this.server, {
      cors: {
        origin: "https://01-socket-server-basic-j25r17ffy-renzovargas17.vercel.app/"
      }
    });
  }
  middlewares() {
    this.app.use(express.static(pathToPublic));
    this.app.use(cors())
  }
  // // function X(req,res,next) {}
  // applyMiddlewares(arrayOfMiddlewares) {
  //   arrayOfMiddlewares.forEach((middleware) => {
  //     this.app.use(middleware);
  //   });
  // }

  configureSockets() {
    new Sockets(this.io);
  }
  execute() {
    this.middlewares();
    this.configureSockets();
    this.server.listen(this.port, () => {
      console.log(`listening on : ${this.port}`);
    });
  }
}

module.exports = Server;
