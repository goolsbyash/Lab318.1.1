// console.log('Hello World!');

console.log("It's fun learning how to use Node.js!");

// Part Four: Creating a Server

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

// const server = http
//   .createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World!\n");
//   })
//   .listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });


// Second server example
const server = http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  })
  