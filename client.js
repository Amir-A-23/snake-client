const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: '50541'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");


  conn.on("connect", () => {
    console.log("Your Connected!!!")
    conn.write('Name: AMA');
   // setInterval(() => {conn.write('Move: up')}, 1000);

    //setTimeout(() => {conn.write('Move: up')}, 2000);
    //setTimeout(() => {conn.write('Move: up')}, 3000);
    //setTimeout(() => {conn.write('Move: up')}, 4000);
    //setTimeout(() => {conn.write('Move: up')}, 5000);

    //conn.write('Move: up');
    // code that does something when the connection is first established
  });
  

  conn.on("data", (data) => {
    console.log(data);
    // code that receives data from server
  });

  return conn;
};

module.exports = {connect};
