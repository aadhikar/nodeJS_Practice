var fs = require("fs");

console.log("File read starts");
var dataAsync = fs.readFile("./file.txt", "utf8", function(err, data){
	if(err){
		console.log(err);
	}
	console.log(data);
});

var dataSync = fs.readFileSync("./file1.txt", "utf8");
console.log(dataSync);
console.log("File read ends");



module.exports = {
	dataAsync: dataAsync,
	dataSync: dataSync
};