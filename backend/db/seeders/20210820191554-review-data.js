'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Reviews', [{
        userId: 1,
        placeId: 1,
        rating: 1,
        comment: 'This place sucks!'
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Places');
  }
};
