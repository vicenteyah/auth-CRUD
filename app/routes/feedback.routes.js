'use strict'
const controller = require("../controllers/feedback.controller.js")

module.exports = function(app){
    app.post(
        "/api/Feedback/feedbacks",
        controller.feedbackrequest
    );
}