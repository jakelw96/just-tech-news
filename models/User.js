const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create User model
class User extends Model {}

// Define table columns and configurations
User.init(
    {
        // Define an id column
        id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true 
        },
        // Define username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Define email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // Define password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;