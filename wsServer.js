var ws = require("nodejs-websocket");
var Port = 3000;

var clientCount = 0;
var server = ws.createServer(function(conn){
    console.log("New connection");
    clientCount++;
    conn.nickname ='user'+clientCount;
    broadcast(conn.nickname+" come in");
    conn.on("text",function(str){
        console.log("received", str);
        //conn.sendText(str.toUpperCase()+"!!!");
        broadcast(conn.nickname+" : "+str);
    });
    conn.on("close",function(code,reason){
        console.log("connection closed");
        broadcast(conn.nickname+" log out")
    });
    conn.on("error",function(err){
        console.log("handle error",err);
    })
}).listen(Port);

console.log("websocket listen on port:"+Port);

function broadcast(str){
    server.connections.forEach(function(conn){
        conn.sendText(str);
    })
}
