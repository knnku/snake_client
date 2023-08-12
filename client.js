const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // Connection start and pass in name.
    console.log("Connection successfully established.");
    conn.write("Name: KTT");
  });

  conn.on("data", (data) => {
    // code that does something
    console.log("Snake Game says:", data);
  });

  return conn;
};

module.exports = {
  connect,
};
