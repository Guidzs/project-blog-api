'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    display_name: {
      type: Sequelize.STRING,
    },
    email: {
      primaryKey: true,
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING,
    },
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
