const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello NodeJS");

  // <--- Method 1 ---- >
  // res.writeHead(200, { "Content-Type": "text/html" });
  // fs.createReadStream("./index.html").pipe(res);

  // <--- Method 2 ---- >
  //   const html = fs.readFileSync("./index.html", "utf-8");
  //   res.end(html);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
