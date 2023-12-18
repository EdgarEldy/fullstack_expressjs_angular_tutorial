'use strict';
const {
    Model
} = require('sequelize');
const {Cast} = require("sequelize/lib/utils");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.belongsTo(models.Customer, {
                foreignKey: 'customer_id',
                onDelete: 'CASCADE'
            });

            Order.belongsTo(models.Product, {
                foreignKey: 'product_id',
                onDelete: 'CASCADE'
            });
        }
    }

    Order.init({
        customer_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        qty: DataTypes.DOUBLE,
        total: DataTypes.DOUBLE
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};