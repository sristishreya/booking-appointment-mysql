const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Booking = sequelize.define('booking',{
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Booking;