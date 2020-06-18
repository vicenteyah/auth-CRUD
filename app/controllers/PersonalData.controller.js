'use strict'
const db = require("../models")
const PersonalData = db.PersonalData

exports.createPersonalData = (req, res) => {
    PersonalData.create({
        userId: req.body.userId,
        nameData: req.body.nameData,
        addressData:req.body.addressData,
        phoneData:req.body.phoneData,
        paymentMeth:req.body.paymentMeth
    }).then(data => {
        res.status(201).send({message: "Thank you for using Huastechnolgy application"})
    }).catch(error => {
        res.status(500).send({message:"Internal server error"})
    })
}

exports.getAPersonalData = (req, res) => {
    PersonalData.findOne({
        where: {
            userId: req.params.userId
        }
    }).then(data => {
        res.status(200).send(data)
    }).catch(error => {
        res.status(404).send({message:"Data not found"})
    });
}