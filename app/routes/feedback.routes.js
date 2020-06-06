'use strict'
const controller = require("../controllers/feedback.controller.js")

module.exports = function(app){
    app.post(
        "/api/Feedback/feedbacks",
        controller.feedbackrequest
    );
    app.get(
        "/api/Feedback/feedbacks",
        controller.getFeedbacks
    )
    app.get(
        "/api/Feedback/feedbacks/:id",
        controller.getAfeedback
    )
    app.delete(
        "/api/Feedback/feedbacks/:id",
        controller.DeleteFeedbackRequest
    );
}