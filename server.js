// reference code in different file
const express = require("express");
// get app object from express
const app = express();

// call back functon recieves request and response
app.get("/test", (req, res) => {
    res.status(200).json({success: true})

});

// when app is running, print message
app.listen(1337, () => console.log("server is running on port 1337"));