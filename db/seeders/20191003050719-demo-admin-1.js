'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('admins', [{
    name: 'yaya',
    email: 'yoyo@gmail.com',
    password: '123asd',
    gender: 'male',
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
