'use strict'
const controller = require("../controllers/Additional.controller.js")

module.exports = function(app){
    app.post(
      "/api/Additional/additionals",
      controller.createAdditionalRequest  
    );
}