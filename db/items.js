// direct path to connected instance
const knex = require("./knex");

function createItem(item){
    return knex("TODO_ITEMS").insert(item);
};

function getAllItems(){
    return knex("TODO_ITEMS").select("*");
};

function deleteItem(ID){
    return knex("TODO_ITEMS").where("ID", ID).del();
};

function updateItem(ID, item) {
    return knex("TODO_ITEMS").where("ID", ID).update(item);
};

// executable against ToDo table
module.exports = {
    createItem,
    getAllItems,
    deleteItem,
    updateItem
}