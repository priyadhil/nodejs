const path = require("path");

//base file name
console.log(__filename);
console.log(path.basename(__filename));

//Dir name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//create path object
//console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//concatenate paths
// ../test/about.html
console.log(path.join(__dirname, "test", "about.html"));
