const EventEmitter = require("events");
const http = require('http');
class Sales extends EventEmitter {
   constructor() {
      super(); // having acces to everything
   }
}

const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {
   console.log("There was a new sale!");
})

myEmitter.on('newSale', () => {
   console.log('Cosutmer name: Jonas')
});

myEmitter.on('newSale', stock => {
   console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit('newSale', 9);

//////////////////////////////

const server = http.createServer();

//listening for event
server.on('request', (req, res) => {
   console.log('Request received!');
   console.log(req.url);
   res.end('Request received!');
});

server.on('request', (req, res) => {
   console.log('Another request');
});

server.on('close', () => {
   console.log('Server closed');
});

server.listen(8000, "127.0.0.1", () => {
   console.log('Waiting for request....');
});