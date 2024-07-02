import http from "http";
import dotenv from "dotenv";
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT;

// 7. Loading Files within url and methods

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__filename, __dirname)

// const server = http.createServer((req, res) => {
const server = http.createServer(async(req, res) => {

  // 1. Setting Headers and Content type with setHeader
  res.setHeader("Content-Type", "text/html");

  // 2. Write Request
  res.write("Hello World!");
  res.end("Hello World!");

  // 3. Setting Status code and content-type using writeHead
  // a) Server Error
  res.writeHead(500, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Server Error! Please Try Again Later" }));
  // b) Success
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>");

  // 4. Request Handling
  console.log(req.url);
  console.log(req.method);

  // 5. Check url condition for Routing
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About</h1>");
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("<h1>Not Found</h1>");
  }

  // 6. Check url method for routing
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home Page</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1>");
      } else {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("<h1>Not Found</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }

  // 7. Loading Files within url and methods

   try {
     if (req.method === "GET") {
       let filePath;
       if (req.url === "/") {
         filePath = path.join(__dirname, "public", "index.html");
       } else if (req.url === "/about") {
         filePath = path.join(__dirname, "public", "about.html");
        } else {    
         filePath = path.join(__dirname, "public", "notfound.html");
       }
       const data = await fs.readFile(filePath);
       res.setHeader("Content-Type", "text/html");
       res.write(data);
       res.end();
     } else {
       throw new Error("Method not allowed");
     }
   } catch (error) {
     res.writeHead(500, { "Content-Type": "text/plain" });
     res.end("Not Found");
   }


});

server.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
