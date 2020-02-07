const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const users = require("./routes/api/users");
const passport = require('passport');
const path = require('path');
// require("./config/passport")(passport);
const http = require('http');

const WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510}) 
  const connections = [];
  wss.on('connection', function (ws) {
    connections.push(ws)
  ws.on('message', function (message) {
    console.log('received: %s', message)
    connections.forEach(connection => connection.send((message)))
  })  

})

const bodyParser = require("body-parser");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  // app.use(express.static("/.well-known/acme-challenge/oS7GY8wJrnTy3M4YNemMG7_xrpeXdBpkWIJXEujwA9w", { dotfiles: 'allow' } ));

  // app.get("/.well-known/acme-challenge/oS7GY8wJrnTy3M4YNemMG7_xrpeXdBpkWIJXEujwA9w", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, ".well-known", "acme-challenge", "oS7GY8wJrnTy3M4YNemMG7_xrpeXdBpkWIJXEujwA9w"))
  // })
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World"));
app.use(passport.initialize());


app.use(bodyParser.json());
// const db = require("./config/keys").mongoURI;

// mongoose
//   .connect(db)
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch(err => console.log(err));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
