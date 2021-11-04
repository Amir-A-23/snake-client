const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require("./constants");

let connection;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
  

const setupInput = (conn) => {
  connection = conn;
  //console.log(conn);
  stdin.resume();

  //add event listeners before returning stdin
  stdin.on("data", handleUserInput);

  return stdin;
};


const handleUserInput = (key) => {
  // your code here
  console.log(key);
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    //process.stdout.write('w');
    connection.write(MOVE_UP_KEY);
    //setInterval(() => {connection.write('Move: up')}, 1000);
  }
  if (key === 'a') {
    connection.write(MOVE_LEFT_KEY);
  }
  if (key === 's') {
    connection.write(MOVE_DOWN_KEY);
  }
  if (key === 'd') {
    connection.write(MOVE_RIGHT_KEY);
  }
  if (key === 'y') {
    connection.write('Say: Finally Got it');
  }
  if (key === 'b') {
    connection.write('Say: To work');
  }
  if (key === 'n') {
    connection.write('Say: TTvTT');
  }

};


module.exports = {setupInput};
