'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('blogs', [{
      title: 'Judul;',
      body : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit neque natus aut reiciendis voluptates placeat ab vitae, dolorem praesentium sint.',
      comment: 'tai',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
