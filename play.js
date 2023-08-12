const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const inputConnection = connect(); //Create a variable to contain what connect() returns

setupInput(inputConnection); //Pass in the object from connect function
