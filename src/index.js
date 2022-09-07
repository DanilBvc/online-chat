const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
let users = 0;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/assets'));

io.on('connection', (socket) => {
  console.log('user connected')
  socket.on('chat message', (data) => {
    io.emit('chat message', {
      message: data.message,
      name: data.name,
      
    });
  });
  
  socket.emit('online', {users: users = users + 1});
  socket.on('disconnect', () => {
    users--
    console.log('user disconnected')
  })
});

http.listen(3000, () => {
  console.log('server on');
});


