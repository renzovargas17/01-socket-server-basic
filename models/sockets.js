class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents()
  }

  socketEvents() {
    //ON CONNECTION:
    this.io.on("connection", (socket) => {

      // LISTEN TO EVENT: 'MESSAGE-TO-SERVER
      socket.on("message-to-server", (data) => {
        console.log(data);
        this.io.emit("message-from-server", data);
      });
    });
  }
}
module.exports = Sockets;
