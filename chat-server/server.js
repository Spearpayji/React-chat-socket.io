const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", function(socket) {
  socket.on("emit", function(data) {
    socket.broadcast.emit("message", { ...data });
  });
});

server.listen(8080, function(err) {
  if (err) throw err;
  console.log("server is listening to port 8080");
});
