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
        await queryInterface.bulkInsert('Orders', [
            {
                customer_id: '1',
                product_id: '1',
                qty: 5,
                total: 7500,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                customer_id: '1',
                product_id: '2',
                qty: 10,
                total: 15000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                customer_id: '2',
                product_id: '1',
                qty: 5,
                total: 15000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                customer_id: '2',
                product_id: '2',
                qty: 10,
                total: 27000,
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
        await queryInterface.bulkDelete('Orders', null, {});

    }
};
