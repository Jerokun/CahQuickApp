var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log("User connected");

    socket.emit('test event', 'WORKING');
});

server.listen(4200, () => {
    console.log('Socket.io server listening on 4200');
});

//node socket-io-server.js