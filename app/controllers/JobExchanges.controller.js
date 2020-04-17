const db = require("../models")
const Job = db.JobExchanges;

//const Op = db.Sequelize.Op;

exports.jobrequest = (req, res) => {
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