/* const person = require("./person.js");
console.log(person);
console.log(person.name); */

/* const Person = require("./person");
const person1 = new Person("dyl kate", 02);
person1.greeting();

const Logger = require("./logger");
const logger = new Logger();
logger.on("message", data => console.log(`called Listener: `, data));

logger.log("hi");
logger.log("helo");
logger.log("welcom"); */

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);

  /* if (req.url === "/") {
    // res.end("<h1>home</h1>");
    res.writeHead(200, { "content-type": "text/html" });
    // res.end("<h1>home</h1>");
  } */
  /* if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "content-type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "content-type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/api/users") {
    const users = [{ name: "priya", age: 28 }, { name: "ravi", age: 33 }];
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  } */ //static file path

  //dynamic filepath
  let filepath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filepath);
  res.end();
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
