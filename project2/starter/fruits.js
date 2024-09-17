const fs = require('fs');
const http = require('http');
const url = require('url');

//SERVER

const server = http.createServer((req, res) => {
    //console.log(req);
    console.log(req.url); // montre tous les chemins qui sont parcouru par entree dans browser
    
    if( pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if(pathName === '/product') {
        res.end('This is the PRODUCT');
    }
    //res.end('Hello from the server');
});


server.listen(8000, `127.0.0.1`, () => {
    console.log('Listening to requests on port 8000');
})