/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '0'
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'user'
  });
};
