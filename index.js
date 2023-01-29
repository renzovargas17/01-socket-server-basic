const Server = require("./models/server");
require("dotenv").config();
const server = new Server();
// server.applyMiddlewares([
//   (req, res, next) => {
//     console.log(req.headers["x-request-x"]);
//     next()
//   },
//   (req, res, next)=> {
//     console.log("Bien chivito");
//     next()
//   },
// ]);
server.execute();
