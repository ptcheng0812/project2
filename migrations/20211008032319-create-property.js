'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      },
      roomNumber: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      imageOne: {
        type: Sequelize.STRING
      },
      imageTwo: {
        type: Sequelize.STRING
      },
      imageThree: {
        type: Sequelize.STRING
      },
      imageFour: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Properties');
  }
};
