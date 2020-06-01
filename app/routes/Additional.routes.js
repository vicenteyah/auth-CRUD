'use strict'
const controller = require("../controllers/Additional.controller.js")

module.exports = function(app){
    app.post(
      "/api/Additional/additionals",
      controller.createAdditionalRequest  
    );
    app.get(
        "/api/Additional/additionals",
        controller.getAdditionalRequest
    );
    app.get(
        "/api/Additional/additionals/:id",
        controller.getAAdditionalRequest
    );
    app.delete(
        "/api/Additional/additionals/:id",
        controller.deleteAdditionalRequest
    );
    app.put(
        "/api/Additional/additionals/:id",
        controller.updateAdditionalRequest
    );
}