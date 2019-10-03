'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('admins', [{
    name: 'yoyo',
    email: 'yoyo@gmail.com',
    password: '123asd',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
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
