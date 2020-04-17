module.exports = (sequelize, Sequelize) => {
    const JobExchange = sequelize.define("jobexchanges", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
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
          type: Sequelize.STRING
      },
      occupation: {
          type: Sequelize.INTEGER
      },
      jobname: {
          type: Sequelize.STRING
      }

    });
  
    return JobExchange;
  };