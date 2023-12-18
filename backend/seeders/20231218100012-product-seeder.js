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
        await queryInterface.bulkInsert('Products', [
            {
                category_id: '1',
                product_name: 'Citron',
                unit_price: 1500,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                category_id: '1',
                product_name: 'Orange',
                unit_price: 1500,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                category_id: '2',
                product_name: 'Amstel',
                unit_price: 3000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                category_id: '1',
                product_name: 'Primus',
                unit_price: 2700,
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Products', null, {});
    }
};
