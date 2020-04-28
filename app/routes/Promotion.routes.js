'use strict'
const controller = require("../controllers/Promotion.controller.js")

module.exports = function(app){
    app.post(
        "/api/Promotions/promotions",
        controller.promotionrequest
    );
    app.delete(
        "/api/Promotions/promotions/:id",
        controller.deletePromotion
    )
}