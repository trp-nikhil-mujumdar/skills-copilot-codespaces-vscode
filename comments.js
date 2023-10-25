// Create web server
// 1. Create web server
// 2. Read file
// 3. Send file to client
// 4. Send error if needed
// 5. Send 404 page if needed

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // Set header content type
    res.setHeader("Content-Type", "text/html");

    //