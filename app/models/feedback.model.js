module.exports = (sequelize, Sequelize)=>{
    const Feedback = sequelize.define("feedbacks", {
        completename: { //completeName
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        phone:{
            type: Sequelize.INTEGER
        },
        store:{
            type: Sequelize.STRING
        },
        message:{
            type: Sequelize.STRING
        }
    });

    return Feedback;
};