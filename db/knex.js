const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "todo.db"
    }
});

module.exports = connectedKnex;