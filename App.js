require('dotenv').config()
const express = require('express');

const app = express();


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
// app.use(require("./routes/chat"))

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));