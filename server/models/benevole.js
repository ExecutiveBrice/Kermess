"use strict";

module.exports = function(sequelize, DataTypes) {
  var Benevole = sequelize.define("Benevole", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    prenom: {
      type: DataTypes.STRING,
    },
    nom: {
      type: DataTypes.STRING,
    },
    telephone: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    limite: {
      type: DataTypes.STRING,
    },

  });
  Benevole.associate = function(models) {

    models.Benevole.belongsToMany( models.Croisement, {
      through: {
        model: ResaBenevoles,
        unique: false
      },
      foreignKey: 'croisement'
  });

  };
  return Benevole;
};
