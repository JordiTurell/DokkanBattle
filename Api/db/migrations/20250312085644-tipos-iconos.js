'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Tipos', 'pathiconnormal', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    })

    await queryInterface.addColumn('Tipos', 'pathiconsuper', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    })

    await queryInterface.addColumn('Tipos', 'pathiconextreme', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    })

    await queryInterface.addColumn('Tipos', 'extreme', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Tipos', 'pathiconnormal')
    await queryInterface.removeColumn('Tipos', 'pathiconsuper')
    await queryInterface.removeColumn('Tipos', 'pathiconextreme')
    await queryInterface.removeColumn('Tipos', 'extreme')
  }
};
