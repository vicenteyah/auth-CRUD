'use strict'
const controller = require("../controllers/Pizza.controller.js")

module.exports = function(app){
    app.post(
        "/api/Pizza/pizzas",
        controller.createPizzasRequest
    );
}