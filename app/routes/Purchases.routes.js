'use strict'
const controller = require("../controllers/Purchases.controller.js")

module.exports =  function(app){
    app.post(
        "/api/Purchases/purchases",
        controller.createPurchase
    )
}