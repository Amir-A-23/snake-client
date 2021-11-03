const { connect } = require("./client");
const { setupInput } = require("./input");
//console.log(connect);
console.log("Connecting ...");

connect();

setupInput(); //call after calling connect??