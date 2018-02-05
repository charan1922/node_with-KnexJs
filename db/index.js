var knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user : 'postgres',
       password : '123456',
    database: "todo_db"
  }
});

module.exports = knex;
