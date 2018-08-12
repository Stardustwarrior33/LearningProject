import config from "./config";
import apiRouter from "./api";

import express from "express";

const server = express();

server.set("view engine", "ejs");

server.get("/", (req, res) =>{
    res.render("index", {
        content: "Hello Express and <em>EJS</em>!"
    });
});

server.use("/api", apiRouter);
server.use(express.static("public"));

/*server.get("/about.html", (req, res) =>{
    fs.readFile("public/about.html", (err, data) =>{
        try{
            res.send(data.toString());
        }
        catch(err){
            res.send(console.error(err));
        }
    });
}); */

server.listen(config.port, () =>{
    console.info(`Express listening on port ${config.port}`);
});