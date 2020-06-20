const db = require("../models")
const Job = db.JobExchanges;

//const Op = db.Sequelize.Op;

exports.jobrequest = (req, res) => { //createJobrequest
    Job.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        civilstatus: req.body.civilstatus,
        phone: req.body.phone,
        occupation: req.body.occupation,
        jobname: req.body.jobname
    })

    .then(Job => {
        res.send({message: "Solicitud Enviada con Éxito"})
    }).catch(error => {
        res.status(500).send({message: "Error de envío"})
        console.log(error)
    });
    
};

exports.getJobrequests = (req,res) =>{
    Job.findAll({}).then(job =>{
        res.status(200).send(job)
    }).catch(error => {
        console.log(error)
        res.status(404).send({message:"Bad implementation"})
    })
}

exports.getAJobrequest = (req,res) =>{
    Job.findOne({
        where:{
            id:req.params.id
        }
    }).then(job=>{
        res.status(200).send(job)
    }).catch(err =>{
        res.status(404).send({message:"item not found"})
    })
}

exports.deleteJobrequest = (req, res) => {
    Job.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.status(200).send({message: "Item deleted successfully"})
    }).catch(error => {
        res.status(404).send({message: "Item not found"})
    });
}

exports.updateJobrequest = (req, res) => {
    Job.update({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        civilstatus: req.body.civilstatus ,
        phone: req.body.phone,
	    occupation: req.body.occupation,
        jobname : req.body.jobname  
        //store: req.body.store
    },
    {
       where:{
            id: req.params.id
        }
    }).then(rowsUpdate =>{
        console.log(rowsUpdate)
        res.status(200).send({message:"rows updated successfully"})
    }).catch(error =>{
        res.status(404).send({message:"Row not found"})
    });
}
