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

exports.getFeedbacks = (req, res) =>{
    Feedback.findAll().then(rows =>{
        res.status(200).send(rows)
    }).catch(error =>{
        res.status(404).send({message:'Items not found'})
    })
}

exports.getAfeedback = (req,res)=>{
    Feedback.findOne({
        where:{
            id: req.params.id
        }
    }).then(row =>{
        res.status(200).send(row)
    }).catch(error =>{
        res.status(404).send({message:'item not found'})
    })
}

exports.deleteFeedbackRequest = (req,res) => {
    Feedback.destroy({
        where:{
            id: req.params.id
        }
    }).then(deleteRow => {
        res.status(200).send({message:'item deleted successfully'})
    }).catch(error => {
        res.status(404).send({message:'item not found'})
    })
}
exports.updateFeedbackRequest = (req,res) => {
    Feedback.update({
        completename:req.body.completename,
        email: req.body.email,
        phone: req.body.phone,
        store: req.body.store,
        message: req.body.message
    },
    {
      where: {
        id: req.params.id
      }
    }).then(feedbackUpdate => {
        res.status(200).send({message:'rows updated successfully'})
        console.log(feedbackUpdate);
    }).catch(error =>  {
        res.status(404).send({message:'item not found'})
    })
}