var fs = require("fs");

console.log("File read starts");
var dataAsync = fs.readFile(__dirname+"\\file.txt", "utf8", (err, data) => {
	if(err) console.log(err);
	console.log(data);
	console.log("Asynch file read ends");
});

var dataSync = fs.readFileSync(__dirname+"\\file1.txt", "utf8");
console.log(dataSync);
console.log("File read ends");



module.exports = {
	dataAsync: dataAsync,
	dataSync: dataSync
};