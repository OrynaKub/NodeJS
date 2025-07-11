const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //Solution 1 - entire file was load to the memory (problem)
  //   fs.readFileSync('test-file.txt', (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //Solution 2 : streams
  const readable = fs.createReadStream('test-file.txt');
  readable.on('data', (chunk) => {
    res.write(chunk);
  });
  readable.on('end', () => {
    res.end();
  });
  readable.errored('error', (err) => {
    console.log(err);
    res.statusCode = 500; // status code for the error
    res.end('File not found!');
  });
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});
