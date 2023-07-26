// direct path to connected instance
const knex = require("./knex");

function createItem(item){
    return knex("TODOITEMS").insert(item);
};

function getAllItems(){
    return knex("TODOITEMS").select("*");
};

function deleteItem(ID){
    return knex("TODOITEMS").where("ID", ID).del();
};

function updateItem(ID, item) {
    return knex("TODOITEMS").where("ID", ID).update(item);
};

// executable against ToDo table
module.exports = {
    createItem,
    getAllItems,
    deleteItem,
    updateItem
}