const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(__dirname + '/views/index.html', (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/about') {
    fs.readFile(__dirname + '/views/about.html', (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading about.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/contact-me') {
    fs.readFile(__dirname + '/views/contact-me.html', (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading contact-me.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    fs.readFile(__dirname + '/views/404.html', (err, data) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading 404.html');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
}).listen(8080);
