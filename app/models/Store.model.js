module.exports = (sequelize,Sequelize) => {
    const Store = sequelize.define("stores", {        
        storeName:{
            type: Sequelize.STRING
        },
        addressStore: {
            type:Sequelize.STRING
        }
    });
    return Store;
};