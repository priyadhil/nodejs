const EventEmitter = require("events");
const uuid = require("uuid"); // create random u id format

/* console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4()); */

class Logger extends EventEmitter {
  log(msg) {
    //call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}
module.exports = Logger;
