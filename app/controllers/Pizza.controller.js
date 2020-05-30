const db = require("../models")
const Pizza = db.Pizza;

exports.createPizzasRequest = (req, res) => {
    Pizza.create({
        imgurl: req.body.imgurl,
        pizzasName: req.body.pizzasName,
        price: req.body.price
    }).then(Pizza => {
        res.status(200).send({message: "pizza added successfully"})
    }).catch(error => {
        res.status(404).send({message: "cannot post due to internal server error"})
    })
};