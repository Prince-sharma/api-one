'use strict';
module.exports = (sequelize, DataTypes) => {
  const BorrowingRequest = sequelize.define('BorrowingRequest', {
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
  BorrowingRequest.associate = function(models) {
    // associations can be defined here
  };
  return BorrowingRequest;
};