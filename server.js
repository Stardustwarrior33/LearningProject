import http from "http";
import { logStars } from "./config";

const server = http.createServer();

server.on("request", (req, res) =>{
    res.write("Hello HTTP!\n");
    setTimeout(() =>{
        res.write("I can stream!\n");
        res.end();
    }, 3000);
    let body = [];
    req.on("data", (chunk) =>{
        body.push(chunk);
    }).on("end", () => {
        body = Buffer.concat(body).toString();
    }).on("error", (err) =>{
        logStars(err.stack);
    });
});

server.listen(8080);