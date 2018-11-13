var ws = require("nodejs-websocket");
var Port = 3000;
var server = ws.createServer(function(conn){
    console.log("New connection");
    conn.on("text",function(str){
        console.log("received", str);
        conn.sendText(str.toUpperCase()+"!!!");
    });
    conn.on("close",function(code,reason){
        console.log("connection closed");
    });
    conn.on("error",function(err){
        console.log("handle error",err);
    })
}).listen(Port);

console.log("websocket listen on port:"+Port);