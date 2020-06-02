'use strict'
const controller = require("../controllers/Extra.controller.js")

module.exports = function(app){
    app.post (
        "/api/Extra/extras",
        controller.createExtraRequest
    );
}