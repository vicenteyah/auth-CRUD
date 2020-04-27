const db = require("../models")
const Feedback = db.Feedback

exports.feedbackrequest = (req, res)=>{
    Feedback.create({
        completename: req.body.completename,
        email: req.body.email,
        phone: req.body.phone,
        store: req.body.store,
        message: req.body.message
    })

    .then(Feedback =>{
        res.send({message: "your message was sent successfully"})
    }).catch(error => {
        res.status(500).send({message: "Problem with the feedback"})
        console.log(error)
    });
}