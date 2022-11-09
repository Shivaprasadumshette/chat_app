const io = require('socker.io')(8000)

const users ={ };

io.on('connection',socket=>{
    socket.on('user-joined', name=>{
        user[socket.id]=name;
        socket.broadcast.emit('user-joined');
    });

    socket.on('send', message=>{
        socket.broadcast.emit('recieve',{message: message, name: user[socket.id]})
    });
})