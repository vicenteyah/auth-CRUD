'use strict'
const controller = require("../controllers/Extra.controller.js")

module.exports = function(app){
    app.post (
        "/api/Extra/extras",
        controller.createExtraRequest
    );
    app.get(
        "/api/Extra/extras",
        controller.getExtraRequest
    );
    app.get(
        "/api/Extra/extras/:id",
        controller.getAnExtraRequest
    );
    app.delete(
        "/api/Extra/extras/:id",
        controller.deleteExtraRequest
    );
    app.put(
        "/api/Extra/extras/:id",
        controller.updateExtraRequest
    );
}