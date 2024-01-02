// console.log('Hello World!');

console.log("It's fun learning how to use Node.js!");

//* Part Four: Creating a Server

// First server example
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

// const server = http
//   .createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write("<p>I wonder what else we can send...</p>");
//     res.end();
//   });

//* Part Five: Open Exploration

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.status = 200; //status code ok
      res.setHeader("Content-Type", "text/html");
      res.write(
        '<h1 style="color: purple; text-align: center">Welcome to My First Web App with Node.js</h1>'
      );
      res.write(
        '<nav style="display: flex; flex-direction: row; justify-content: space-between"> <a href="/">Home </a><a href="/about">About Me </a><a href="/gallery">Gallery </a></nav>'
      );
      res.end(); // concludes the request
    } else if (req.url === "/about") {
      res.status = 200;
      res.setHeader("Content-Type", "text/html");
      res.write('<h1 style="color: purple; text-align: center"> About Me</h1>');
      res.write(
        '<h2 style="text-align: center"> My name is Ashley Goolsby and I am an evolving junior full stack developer. </h2>'
      );
      res.end();
    } else if (req.url === "/gallery") {
      res.status = 200;
      res.setHeader("Content-Type", "text/html");
      res.write('<h1 style="text-align: center"> Gallery </h1>');
      res.end();
    } else {
      res.status = 404;
      res.write("<h2> Status 404: Page Not Found</h2>");
      res.end();
    }
  })
  .listen(port, hostname, () => {
    console.log(`Local server running at http://${hostname}:${port}/`);
  });
