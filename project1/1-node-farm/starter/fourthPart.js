const fs = require('fs');
const http = require('http');


// 1. Analyse URL -> creat a new model which is URL 
const url = require('url');

//SERVER

// 1. create a server 
// 2. start the server

//synchronose version -> can be use right away

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// res - dealing with the repons , we need to save the res on the var
//execute each time when the req is send

//execute every single time when the new request 
const server = http.createServer((req, res) => {
    //console.log(req);
    //console.log(req.url); -> can be deleted when we are implementing a router

    //implementing a router 

    const pathName = req.url;
    
    if (pathName === '/' || pathName === '/overview') {
        // res.end -> response.end() - to conclude the response without including any data
        res.end("This is the OVERVIEW!");
    }else if(pathName === '/product') {
        res.end("This is the PRODUCT");
    }else if (pathName === '/api')  {
        res.writeHead(200, { 'Content-type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {
            //need to specifia a http header, must be set up before the respond
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        }); // -> method in Node.js used to set the status code and headers for an HTTP response before sending it to the client.
        res.end('<h1>Page not found!</h1>');
    }

});


server.listen(8000, `127.0.0.1`, () => {
    console.log('Listening to requests on port 8000');
});

