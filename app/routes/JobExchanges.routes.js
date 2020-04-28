'use strict'
const controller = require("../controllers/JobExchanges.controller.js")

module.exports = function(app){
    app.post(
        "/api/JobExchanges/jobexchanges",
        controller.jobrequest
    );
    app.get(
        "/api/JobExchanges/jobexchanges",
        controller.getJobrequests
    )
    app.get(
        "/api/JobExchanges/jobexchanges/:id",
        controller.getAJobrequest
    )
}