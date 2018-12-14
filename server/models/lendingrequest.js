'use strict';
module.exports = (sequelize, DataTypes) => {
  const LendingRequest = sequelize.define('LendingRequest', {
    serialNo: {
    type: Sequelize.STRING
  },
  equipment: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.STRING
  },
  site: {
    type: Sequelize.STRING
  }
  }, {});
  LendingRequest.associate = function(models) {
    // associations can be defined here
  };
  return LendingRequest;
};