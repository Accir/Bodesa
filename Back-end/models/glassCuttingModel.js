const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const glassCutting = sequelize.define('glasscutting', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allownull: false
  },
  machineId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'machines',
      key: 'id'
    },
    allownull: false
  },
  tempering: {
    type: Sequelize.BOOLEAN,
    allownull: false
  },
  glassThickness: {
    type: Sequelize.INTEGER,
    allownull: false
  },
  productionType: {
    type: Sequelize.STRING,
    allownull: false
  },
  units: {
    type: Sequelize.INTEGER,
    allownull: false
  },
  cuttingCoefficient: {
    type: Sequelize.FLOAT,
    allownull: false
  }
}, {
  Sequelize,
  modelName: 'glasscutting',
  freezeTableName: true,
  charset: 'utf8',
  collate: 'utf8_unicode_ci',

})

// glassCutting.sync({})
//   .then(() => {
//     return glassCutting.create({
//       machineId: 1,
//       glassThickness: 3,
//       productionType: "Test 1",
//       units: 2,
//       cuttingCoefficient: 1.2,
//       tempering: true
//     })
//   })

module.exports = glassCutting