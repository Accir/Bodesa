const Sequelize = require('sequelize')
const sequelize = require('../config/database')


const User = sequelize.define('account', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    last_login: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, {
    Sequelize,
    modelName: 'account',
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
})

// User.sync({})
//     .then(() => {
//         return User.create({

//             name: 'tadas',
//             surname: 'tadauskas',
//             email: 'tadas@gmail.com',
//             password: '$2a$10$IyCO/oo5eD1tuecLdgP.eeFm7nmS/iH/zoVtuqn.ZwOClheICenoy',
//             is_admin: false,
//         })
//     })

module.exports = User;