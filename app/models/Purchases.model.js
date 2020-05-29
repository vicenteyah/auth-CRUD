module.exports = (sequelize,Sequelize) => {
    const Purchases = sequelize.define("purchases",{
        userId:{
            type: Sequelize.INTEGER,
            references:{
                model:'users',
                key:'id'
            }
        },
        promotionsId:{
            type: Sequelize.INTEGER,
            references:{
                model:'promotions',
                key:'id'
            }
        }
    })
    return Purchases
}