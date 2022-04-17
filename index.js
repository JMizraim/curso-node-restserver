const dotenv = require("dotenv").config(),
Server = require("./models/server");

const port = process.env.PORT;

const server = new Server(port);

server.listen();
