module.exports = (sequelize, Sequelize) => {
    const PersonalData = sequelize.define("personalData", {
        userId:{
            type: Sequelize.INTEGER,
            references:{
                model:'users',
                key:'id'
            }
        },
        nameData: {
            type: Sequelize.STRING
        },
        addressData: {
            type: Sequelize.STRING
        },
        phoneData:{
            type: Sequelize.INTEGER(10)
        },
        paymentMeth:{
            type: Sequelize.STRING
        }
    });
    return PersonalData;
}