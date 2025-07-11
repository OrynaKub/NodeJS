const EventEmitter = require("events");


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

myEmitter.on("newSale",  stock => {
   console.log(`There are now ${stock} items left in stock`);
})


myEmitter.emit('newSale', 9);