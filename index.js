const express = require('express');  // Express 웹 서버
const http = require('http');        // HTTP 서버
const { Server } = require('socket.io'); // Socket.IO 서버 불러오기
const path = require('path');   
const app = express();
const server = http.createServer(app);
const io = new Server(server); // Socket.IO를 HTTP 서버에 연결
app.use(express.static(path.join(__dirname, 'public')));
io.on('connection', (socket) => {
    console.log("클라이언트 연결됨:", socket.id);


    socket.on('test', (testone) => {
        console.log("테스트 받음", testone);
    });
    

    socket.on('disconnect',() => {
        console.log("연결 끊김");
    });
});
server.listen(3000, () => {
    console.log('서버 실행 중');
});