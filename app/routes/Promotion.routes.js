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
    );
    app.get(
        "/api/Promotions/promotions/",
        controller.getPromotionrequest
    );
    app.get(
        "/api/Promotions/promotions/:id",
        controller.getAPromotionrequest
    );
    app.put(
        "/api/Promotions/promotions/:id",
        controller.updatePromotionrequest
    );
}