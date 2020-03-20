const Sequelize = require('sequelize')
const sequelize = require('../config/database')
const glassCutting = require('./glassCuttingModel')

const machine = sequelize.define('machines', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allownull: false
  },
  group: {
    type: Sequelize.INTEGER,
    allownull: false
  },
  name: {
    type: Sequelize.STRING,
    allownull: false
  },
  type: {
    type: Sequelize.STRING,
    allownull: false
  }
},
  {
    Sequelize,
    modelName: 'machines',
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  })

machine.hasMany(glassCutting);

// machine.sync({})
//   .then(() => {
//     return machine.create({
//       name: "Hegla Galactic",
//       type: "Stiklo raižymo linija",
//       group: 1
//     })
//   })
//   .then(() => {
//     return machine.create({
//       name: "Bottero",
//       type: "Stiklo raižymo staklės",
//       group: 1
//     })
//   })
//   .then(() => {
//     return machine.create({
//       name: "Hegla ProLam460",
//       type: "Stiklo raižymo linija",
//       group: 1
//     })
//   })

module.exports = machine