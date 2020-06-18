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