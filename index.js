var http = require('http')
http.createServer(function(request, response){
    response.writeHead(200, {"Content-type":"text/plain"})
    response.end("Hello World champ\n")
}).listen(process.env.PORT)