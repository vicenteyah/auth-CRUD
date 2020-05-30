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

exports.getPizzasRequest = (req, res) => {
    Pizza.findAll({}).then( pizza => {
        res.status(200).send(pizza)
    }).catch(error => {
        console.log(error);
        res.status(404).send({message: "item not found"})        
    });
}

exports.getAPizzaRequest = (req, res) => {
    Pizza.findOne({
        where: {
            id: req.params.id
        }
    }).then(pizza => {
        res.status(200).send(pizza)
    }).catch(error => {
        res.status(404).send({message:"item not found"})
    })
}

exports.updatePizzasRequest = (req, res) => {
    Pizza.update({
        imgurl: req.body.imgurl,
        pizzasName: req.body.pizzasName,
        price: req.body.price
    },
    {
        where: {
            id: req.params.id
        }
    }).then(rowsUpdate => {
        console.log(rowsUpdate);
        res.status(200).send({message: "rows updated successfully"})        
    }).catch(error => {
        res.status(404).send({message: "Pizza not found"})
    })
}