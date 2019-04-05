const fs = require("fs");
const path = require("path");

//create folder
/* fs.mkdir(path.join(__dirname, "/text"), {}, err => {
  if (err) throw err;
  console.log("folder creted..");
}); */

//1create and write to file
fs.writeFile(path.join(__dirname, "/text", "test.txt"), "hello world", err => {
  if (err) throw err;
  console.log("file written too...");
});

/* fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err;
  console.log("new file created");
}); */

fs.writeFile(
  path.join(__dirname, "/test", "text.txt"),
  "test file, hello world",
  err => {
    if (err) throw err;
    console.log("details added ");

    //file append
    fs.appendFile(
      path.join(__dirname, "/test", "text.txt"),
      "this is easy way to append",
      err => {
        if (err) throw err;
        console.log("appended");
      }
    );
  }
);
