module.exports = (sequelize, Sequelize) => {
    const Extra = sequelize.define("extras", {
        imgurl: {
            type: Sequelize.STRING
        },
        extraName: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    });
    return Extra;
};