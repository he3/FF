(function(){

    "use strict"

    const express = require("express");

    const PORT = 8080;

    const app = express();
    app.get("/", (req, res) => {
        console.log("Request handled.")
        res.send("Express on"); 
    });

    app.listen(PORT);
    console.log("Running on http://localhost:" + PORT);
    
})()
