const db = require("../models")
const Store = db.Store;

exports.createStore = (req, res) => {
    Store.create({
        storeName: req.body.storeName,
        addressStore: req.body.addressStore
    }).then(newStore => {
        res.status(201).send({message: "Store successfully registered"})
    }).catch(error => {
        res.status(500).send({message:"cannot post due to internal server error"})
    })
}

exports.deleteStore =  (req, res) => {
    Store.destroy({
        where:{
            id: req.params.id
        }
    }).then(deleteStore => {
        res.status(200).send({message:"Store deleted successfully"})
    }).catch(error => {
        res.status(404).send({message:"Store not found"})
    })
}