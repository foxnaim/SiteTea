const http = require("http");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".woff": "application/font-woff",
  ".ttf": "application/font-ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "application/font-otf",
  ".wasm": "application/wasm",
};

function serveStaticFile(res, filePath, ext) {
  const fullPath = path.join(__dirname, "public", filePath);
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
      return;
    }
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(`Request: ${url}`);

  if (url === "/send-email" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk.toString()));
    req.on("end", async () => {
      try {
        const { to, subject, text } = JSON.parse(body);
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: "your-email@gmail.com", pass: "your-password" },
        });
        await transporter.sendMail({ from: "your-email@gmail.com", to, subject, text });
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Email sent successfully" }));
      } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to send email" }));
      }
    });
    return;
  }

  const routes = {
    "/Home": "./index.html",
    "/Black": "/pages/Black.html",
    "/Green": "/pages/Green.html",
    "/White": "/pages/White.html",
  };

  if (routes[url]) {
    serveStaticFile(res, routes[url], ".html");
  } else {
    const ext = path.extname(url).toLowerCase();
    if (ext in mimeTypes) {
      serveStaticFile(res, url, ext);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }
  }
});

server.listen(3500, () => console.log("Server running on port 3500"));
