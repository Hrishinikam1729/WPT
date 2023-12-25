const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} - New Request Received\n`;
    const myUrl = url.parse(req.url, true); // Parse query parameters as well

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }

        switch (myUrl.pathname) {
            case "/":
                res.end("I am Hrishi Nikam");
                break;
            case "/about":
                const search = myUrl.query.myName || "Unknown";
                res.end(`Homepage ${search}`);
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("404 Not Found");
        }
    });
});

const PORT = 8000;
myServer.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});