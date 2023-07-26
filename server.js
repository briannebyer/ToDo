// import required modules
const express = require("express");
const bodyParser = require("body-parser");
// import db functions from separate module
const db = require("./db/items");

// create instance of Express app
const app = express();

// use bodyParser, express middleware, to parse JSON and URL-encoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// POST request, create a new item
app.post("/items", async (req, res) => {
    const results = await db.createItem(req.body);
    res.status(201).json({message: "Item created successfully.", id: results[0]});
});

// GET request, retrieve all items
app.get("/items",  async (req, res) => {
    const items = await db.getAllItems();
    res.status(200).json({message: "Items retrieved successfully.", items});
});

// PATCH request, update an item
app.patch("/items/:ID", async (req, res) => {
    const ID = await db.updateItem(req.params.ID, req.body);
    res.status(200).json({message: "Item updated successfully.", ID});
});

// DELETE request, delete an item
app.delete("/items/:ID", async (req,res) => {
    await db.deleteItem(req.params.ID);
    res.status(200).json({message: "Item deleted successfully.", success: true});
});

// start server and listen on port 1337
app.listen(1337, () => console.log("server is running on port 1337"));