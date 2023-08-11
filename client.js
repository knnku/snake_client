const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something
    console.log("Connection successfully established.");
    conn.write("Name: KTT")
  });
  

  conn.on("data", (data) => {
    // code that does something
    console.log("Snake Game says:", data);
  });

  return conn;
};

module.exports = {
  connect,
}