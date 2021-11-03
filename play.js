const connect = require("./client")

//console.log(connect);
console.log("Connecting ...");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //add event listeners before returning stdin
  stdin.on("data", handleUserInput);

  return stdin;
};


const handleUserInput = function (key) {
  // your code here
  console.log(key);
  if (key === '\u0003') {
    process.exit();
  }

};
connect.connect();

setupInput(); //call after calling connect??