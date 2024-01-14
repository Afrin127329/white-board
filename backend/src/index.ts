import express from "express";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
