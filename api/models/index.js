const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.rentals = require("./rental.js")(mongoose);
db.generalMessages = require("./general_messages.js")(mongoose);

module.exports = db;
