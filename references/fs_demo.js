const fs = require('fs');
const path = require('path');

/*
Uncomment necessary code and test it
*/

// Create folder
// Note: fs.mkdirSync --> synchronous verions do not accept callback functions
// fs.mkdir(path.join(__dirname, '/fsTest'), {/*options goes here*/}, err => {
//     if(err) throw err;
//     console.log('Folder created!!')
// });

// Create and write file
// fs.writeFile(path.join(__dirname, 'fsTest', 'fsWrite.txt'), 'I am writing this \n', err => {
//     if(err) throw err;
//     console.log('File written!!');
    
//     // append file
//     fs.appendFile(path.join(__dirname, 'fsTest', 'fsWrite.txt'), 'I love NodeJs', err => {
//         if(err) throw err;
//         console.log('File appended!!')
//     });

// });

// Read file
// fs.readFile(path.join(__dirname, 'fsTest', 'fsWrite.txt'), 'utf-8', (err, res) => {
//     if(err) throw err;
//     console.log(res);
//     console.log('File read!!');
// });

// Rename file
fs.rename(path.join(__dirname, 'fsTest', 'fsWrite.txt'), path.join(__dirname, 'fsTest', 'fsWriteRenamed.txt'), err => {
    if(err) throw err;
    console.log('File renamed!!');
});