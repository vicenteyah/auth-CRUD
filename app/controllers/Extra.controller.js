const db = require("../models")
const Extra = db.Extra;

exports.createExtraRequest = (req, res) => {
    Extra.create({
        imgurl: req.body.imgurl,
        extraName: req.body.extraName,
        price: req.body.price
    }).then(newExtra => {
        res.status(201).send({message: "Extra added successfully"})
    }).catch(error => {
        res.status(500).send({message:"cannot post due to internal server error"})
        console.log(error);
    })
}