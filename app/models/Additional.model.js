module.exports = (sequelize, Sequelize) => {
    const Additional = sequelize.define("additional", {
        imgurl: {
            type: Sequelize.STRING
        },
        additionalName: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    });

    return Additional;
}