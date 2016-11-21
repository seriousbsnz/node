var http = require('http');  // This is how you require modules in node

// var server = http.createServer(function(request, response) {
//     console.log('got a request!');
//     response.write('hi');
//     response.end();
    
// });

// server.listen(3000);



// http.createServer(function(request, response) {
//     response.writeHead(200); // Status code in header
//     response.write('Hello, this is me.');       // This is the callback in the event loop
//     response.end();
// }).listen(8080);
// console.log("Listening on 8080");

// node server.js will then return listening on port 8080
// in new terminal, curl http://localhost:8080 will return 'hello this is me'


http.createServer(function(request, response) {
    response.write('Dog is running');
    setTimeout(function(){               //Will create new event that is called in 5 seconds
        response.write('Dog is done');
        response.end();
    }, 5000);
}).listen(8080);