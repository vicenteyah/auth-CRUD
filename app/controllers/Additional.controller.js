const db = require("../models")
const Additional = db.Additional;

exports.createAdditionalRequest = (req, res) => {
    Additional.create({
        imgurl: req.body.imgurl,
        additionalName: req.body.additionalName,
        price: req.body.price
    }).then(Additional => {
        res.status(201).send({message: "additional added successfully"})
    }).catch(error => {
        res.status(500).send({message: "cannot post due to internal server error"})
        console.log(error);        
    });
}