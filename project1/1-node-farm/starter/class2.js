const fs = require('fs');
fs.readFile('./txt/start.txt','utf-8',  (err, data1) => {
	fs.readFile('./txt/${data1}.txt', 'utf-8', (err, data2) => {
		console.log(data2);
	fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
	console.log(data3);
	
	fs.writeFile('./txt/final.txt', `$(data2}\n${data3}`,  'utf-8', err => {
		console.log('Your file has been writen =) ');
	})
	});	
});
});

console.log('Will read File!');

//Node.js will read the file and will continuer the execution anyways , so it's
// not going to block code after the second line
