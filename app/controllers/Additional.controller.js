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

exports.getAdditionalRequest = (req, res) => {
    Additional.findAll({}).then(additional => {
        res.status(200).send(additional)
    }).catch(error => {
        res.status(404).send({message: "item not found"})
    });
}

exports.getAAdditionalRequest = (req, res) => {
    Additional.findOne({
        where: {
            id: req.params.id
        }
    }).then(additional =>{
        res.status(200).send(additional)
    }).catch(error => {
        res.status(404).send({message: "item not found"})
    })
}

exports.deleteAdditionalRequest = (req, res) => {
    Additional.destroy({
        where: {
            id: req.params.id
        }
    }).then(addi => {
        res.status(200).send({message: "item deleted successfully"})
    }).catch(error => {
        res.status(404).send({message:"item not found"})
        console.log(error);
        
    })
}

exports.updateAdditionalRequest = (req, res) => {
    Additional.update({
        imgurl: req.body.imgurl,
        additionalName: req.body.additionalName,
        price: req.body.price
    },
    {
        where: {
            id: req.params.id
        }
    }).then(addiUpdate => {
        res.status(200).send({message:"rows updated successfully"})
        
    }).catch(error => {
        res.status(404).send({message:"item not found"})
    })
}