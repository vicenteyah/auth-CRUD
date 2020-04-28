const db = require("../models")
const Promotion = db.Promotion;

exports.promotionrequest = (req, res) => {
    Promotion.create({
        packagename: req.body.packagename,
        description: req.body.description,
        price: req.body.price
    })
    
    .then(Promotion => {
        res.send({message: "package added successfully"})
    }).catch(error =>{
        res.status(500).send({message: "Problem with the promotion"})
        console.log(error)
    });
}