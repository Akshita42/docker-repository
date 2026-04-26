const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello Akshita, Docker is working!");
    res.end();
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});