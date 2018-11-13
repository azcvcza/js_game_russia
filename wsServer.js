var ws = require("nodejs-websocket");

var server = ws.createServer(function(conn){
    console.log("New connection");
    conn.on("text",function(str){
        console.log("received", str);
        conn.sendText(str.toUpperCase()+"!!!");
    });
    conn.on("close",function(code,reason){
        console.log("connection closed");
    })
}).listen(8001);