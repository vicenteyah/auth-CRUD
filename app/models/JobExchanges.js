module.exports = (sequelize, Sequelize) => {
    const JobExchange = sequelize.define("jobexchanges", {
      name: {
        type: Sequelize.STRING
      },
      age:{
        type: Sequelize.INTEGER
      },
      gender:{
        type: Sequelize.STRING
      },
      civilstatus: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING  //INTEGER(10)
      },
      occupation: {
        type: Sequelize.STRING
      },
      jobname: {
        type: Sequelize.STRING
      }

    });
  
    return JobExchange;
  };