// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

const burger = {
    name: "Burger",
    is_eaten: true
}
// Export the database functions for the burger_controller.js
module.exports = burger;