'use strict'
const controller = require("../controllers/PersonalData.controller.js")

module.exports = function (app){
    app.post(
        "/api/PersonalData/personaldata",
        controller.createPersonalData
    );
    app.get(
        "/api/PersonalData/personaldata/:userId",
        controller.getAPersonalData
    );
}