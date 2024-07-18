const wss = require("socket.io")(8080);

wss.on("connection", function connection(ws) {
  console.log("A new client connected");

  ws.on("newMessage", function (message) {
    ws.send(message);
  });

  ws.on("close", function () {
    console.log("Client disconnected");
  });
});

module.exports = { wss };
