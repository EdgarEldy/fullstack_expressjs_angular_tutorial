'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Customers', [
            {
                first_name: 'John',
                last_name: 'Doe',
                tel: '+135687456',
                email: 'johndoe@mailnator.com',
                address: 'New York',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                first_name: 'Jane',
                last_name: 'Dane',
                tel: '+157464368',
                email: 'janedane@mailnator.com',
                address: 'Los Angeles',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Customers', null, {});
    }
};
