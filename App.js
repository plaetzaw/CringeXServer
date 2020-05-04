require('dotenv').config()
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 8081;

// need to initialize and use body parser
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes/login"));
app.use(require("./routes/createUser"));
app.use(require("./routes/uploadPost"));
app.use(require("./routes/contentFeed"));
app.use(require("./routes/profileView"))
app.use(require("./routes/protected"))
app.use(require("./routes/chat"))

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
