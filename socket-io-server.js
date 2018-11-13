var app = require('http').createServer(hancler);
var io = require("socket.io")(app);
var fs = require("fs");

app.listen(3000);

io.on('connection',function(socket){
    socket.emit('news',{hello:'world'});
    socket.on('my other event',function(data){
        console.log(data);
    })
})