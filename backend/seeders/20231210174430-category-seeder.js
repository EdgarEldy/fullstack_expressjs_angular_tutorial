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

        // Add categories data for testing
        await queryInterface.bulkInsert('Categories', [
            {
                category_name: "Lemonades",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                category_name: "Alcohols",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {})
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Categories', {})
    }
};
