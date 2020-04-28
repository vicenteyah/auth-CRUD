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

exports.getPromotionrequest = (req, res)=>{
    Promotion.findAll({}).then(promotion => {
        res.status(200).send(promotion)
    }).catch(error =>{
        console.log(error)
        res.status(404).send({message:"Items not found"})
    });
}

exports.getAPromotionrequest = (req, res) => {
    Promotion.findOne({
        where: {
            id:req.params.id
        }
    }).then(promotion => {
        res.status(200).send(promotion)
    }).catch(error => {
        res.status(404).send({message: "Item not found"})
    });
}

exports.deletePromotion = (req,res) => {
    Promotion.destroy({
        where:{
            id: req.params.id
        }
    }).then(data =>{
        res.status(200).send({message: 'item deleted successfully'})
    }).catch(error =>{
        res.status(404).send({message:'item not found'})
    })
}