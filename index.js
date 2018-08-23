//
//Priamry file for the API
//
//Dependencies
const http = require("http");

//Create Server
const server = http.createServer((req, res) => {
  res.end("Hey There\n");
});

//Server should listen on port 3000

server.listen(3000, () => {
  console.log("Server is listening on port 3000 now");
});
