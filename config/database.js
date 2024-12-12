const { Sequelize, Sequelize } = require("sequelize");

// config/database.js
const Sequelize = new Sequelize(
    'esport_db',
    'aghikalam',
    'aghikalam',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = Sequelize;