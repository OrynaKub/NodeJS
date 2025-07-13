const fs = require('fs')
const express = require('express');

const app = express();

//http methode for the request, get send to server for this url : "/"
/* app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
}); 

 app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});
 */

//read info before writing anything
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//always specifia the version of the API
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
