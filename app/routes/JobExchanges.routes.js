'use strict'
const controller = require("../controllers/JobExchanges.controller.js")

module.exports = function(app){
    app.post(
        "/api/JobExchanges/jobexchanges",
        controller.jobrequest
    );
}