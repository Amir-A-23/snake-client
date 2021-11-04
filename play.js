const { connect } = require("./client");
const { setupInput } = require("./input");
//console.log(connect);
console.log("Connecting ...");

const conn = connect();

setupInput(conn); //call after calling connect??