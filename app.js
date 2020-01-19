const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const users = require("./routes/api/users");
// const events = require("./routes/api/events");
// const register = require("./routes/api/register");
// const apiYelp = require("./routes/api/api_yelp");
const passport = require('passport');
const path = require('path');
// require("./config/passport")(passport);
const http = require('http');

var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510}) 
  wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })  
  setInterval(
    () => ws.send(`${new Date()}`),
    1000
  )
})
// const connections = [];

const bodyParser = require("body-parser");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// wss.on('connection', (ws) => {
//   connections.push(ws);
//   //connection is up, let's add a simple simple event
//   console.log("HERE")
//   ws.on('message', (message) => {
//       // // if (message.data instanceof Blob) {
//       //   const reader = new FileReader()
//       //   console.log(reader.readAsText(message.data));
//       // // }
//       console.log(message)
//       //log the received message and send it back to the client
//       // console.log('received: %s', payload);
//       // ws.send(`Hello, you sent -> ${payload}`);
//       connections.forEach(connection => connection.send(message))
//       // ws.send(message)
//   });
//   console.log("HEREEE")

//   //send immediatly a feedback to the incoming connection    
//   ws.send('Hi there, I am a WebSocket server');
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World"));
app.use(passport.initialize());

// app.use("/api/users", users);
// app.use("/api/events", events);
// app.use("/api/register", register);
// app.use("/api/api_yelp", apiYelp);

app.use(bodyParser.json());
// const db = require("./config/keys").mongoURI;

// mongoose
//   .connect(db)
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch(err => console.log(err));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
