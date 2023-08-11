let connection;

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }

  //messages
  if (key === "p") {
    connection.write("Say: hello");
  }
  if (key === "o") {
    connection.write("Say: wassup");
  }
  if (key === "i") {
    connection.write("Say: goodbye");
  }
};

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
};

// conn.on("connect", () => {
//   // code that does something //Move
//   setTimeout(() => {conn.write("Move: left")}, 1000);
//   setInterval(() => {conn.write("Move: up")}, 2000);

// });
