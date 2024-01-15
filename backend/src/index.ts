import express from "express";
import { createServer } from "node:http";
import { Server, Socket } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket: Socket) => {
  console.log("User connected!");
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
