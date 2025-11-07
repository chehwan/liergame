const socket = io("http://localhost:3000");


    socket.on('test', (data) => {
      console.log("서버로부터 받은 메시지:", data);
      addLog("서버 → " + data);
    });


    socket.emit("test", testone;
    addLog("클라이언트" + testone);