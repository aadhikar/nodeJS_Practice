let path = require('path');

let printThis  = (msg) => console.log(msg);

// Base filename
printThis(path.basename(__filename));

// Directory name
printThis(__dirname); // or
printThis(path.dirname(__filename));

// File extension
printThis(path.extname(__filename));

// Create path object
printThis(path.parse(__filename)); // output json object

// Path concationation
printThis(path.join(__dirname, 'myFile.txt')); // handles delimitters for the OS