var http = require('http');
var fs = require('fs');
var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    let ReadStream = fs.createReadStream("/home/trinhngoc/Code_Ngoc/NodeJs/index.html","utf8");
    ReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");

// Create ReadStream
// var ReadStream = fs.createReadStream(__dirname + '/text.txt','utf8');

// ReadStream.on('data',(chunk)=>{
//     //console.log(chunk);
// })

// Create WriteStream