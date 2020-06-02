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

exports.getExtraRequest = (req, res) => {
    Extra.findAll({}).then(extra => {
        res.status(200).send(extra)
    }).catch(error => {
        res.status(404).send({message:"item not found"})
        console.log(error);        
    })
}

exports.getAnExtraRequest = (req, res) => {
    Extra.findOne({
        where:{
            id: req.params.id
        }
    }).then(extra => {
        res.status(200).send(extra)
    }).catch(error => {
        res.status(404).send({message:"item not found"})
    })
}

exports.deleteExtraRequest = (req, res) => {
    Extra.destroy({
        where: {
            id: req.params.id
        }
    }).then(deleterow =>{
        res.status(200).send({message:"item deleted successfully"})
    }).catch(error => {
        res.status(404).send({message: "item not found"})
    })
}