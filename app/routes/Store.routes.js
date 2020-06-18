'use strict'
const controller = require("../controllers/Store.controller.js")

module.exports = function(app){
    app.post (
        "/api/Store/stores",
        controller.createStore
    );
}