module.exports = (sequelize, Sequelize) => {
    const Pizza = sequelize.define("pizzas", {
        imgurl: {
            type: Sequelize.STRING
        }   ,
        pizzasName: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        }
    });

    return Pizza;
}
