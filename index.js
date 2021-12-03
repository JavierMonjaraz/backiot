const express = require('express');
const app = express();
const http = require('http');

const { Server } = require("socket.io");

const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

io.on('connection', (socket) => {
    console.log('Conexion recibida')
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    socket.on('message', (data) => {
        console.log("el socket dice " + data)
        io.emit(data)
    })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});