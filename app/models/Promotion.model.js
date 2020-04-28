module.exports = (sequelize, Sequelize) => {
    const Promotion = sequelize.define("promotions", {
        packagename:{
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    });

    return Promotion;
};