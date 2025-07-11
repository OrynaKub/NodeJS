const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //Solution 1 - entire file was load to the memory (problem)
  fs.readFileSync('test-file.txt', (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});
