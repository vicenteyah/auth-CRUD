module.exports = (sequelize, Sequelize) => {
    const Promotion = sequelize.define("promotions", {
        imgurl:{
            type: Sequelize.STRING
        },
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