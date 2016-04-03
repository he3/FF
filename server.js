(function(){

    "use strict"

    const PORT = 8080;

    const express = require("express");
    const app = express();

    app.use(express.static(__dirname + '/public'));

    app.get("/", (req, res) => {
        res.sendfile("./public/index.html"); 
    });

    app.listen(PORT);
    console.log("Running on http://localhost:" + PORT);
    
})()
