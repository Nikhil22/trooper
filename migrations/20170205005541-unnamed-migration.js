'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*queryInterface.addColumn('User', 'googleId', Sequelize.STRING);
    queryInterface.addColumn('User', 'refreshToken', Sequelize.STRING(255));
    queryInterface.dropTable('UserProfile');
    queryInterface.dropTable('UserClaim');
    return queryInterface.dropTable('UserLogin');*/

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
