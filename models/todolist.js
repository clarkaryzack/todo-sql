'use strict';
module.exports = function(sequelize, DataTypes) {
  var ToDoList = sequelize.define('ToDoList', {
    name: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ToDoList;
};
