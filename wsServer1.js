var ws = require("nodejs-websocket");
var Port = 3001;

var clientCount = 0;
var server = ws.createServer(function(conn){
    console.log("New connection");
    clientCount++;
    conn.nickname ='user'+clientCount;
    var messages = {};
    messages.type = "enter";
    
    messages.data = conn.nickname +" comes in ";
    broadcast(JSON.stringify(messages));
    conn.on("text",function(str){
        console.log("received", str);
        //conn.sendText(str.toUpperCase()+"!!!");
        var messages = {};
        messages.type = "message";
        messages.data = conn.nickname +":"+str;
        broadcast(JSON.stringify(messages));
    });
    conn.on("close",function(code,reason){
        console.log("connection closed");
        var messages = {};
        messages.type = "enter";
        messages.data = conn.nickname + " log out";
        broadcast(JSON.stringify(messages));
        
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
