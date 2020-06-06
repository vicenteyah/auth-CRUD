'use strict'
const db = require("../models")
const Purchases = db.Purchases

exports.createPurchase = (req,res)=>{
    Purchases.create({
        userid: req.body.userid,
        promotionsid:req.body.promotionsid
    }).then(data =>{
        res.status(201).send({message:"you have made a purchase successfully"})
    }).catch(error=>{
        res.status(500).send({message:"Internal server error"})
    })
}