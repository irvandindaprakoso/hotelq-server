'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_done: {
        type: Sequelize.BOOLEAN
      },
      is_booked: {
        type: Sequelize.BOOLEAN
      },
      duration: {
        type: Sequelize.INTEGER
      },
      order_end_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'customers',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'rooms',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};