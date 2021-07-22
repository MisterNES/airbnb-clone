'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 50]
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255],
        isUrl(value) {
          if (Validator.isUrl(value) === false){
            throw new Error('Please enter a proper URL only (e.g. "http://www.<sitenamehere>.com/<imglocation>/...)')
          }
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 3000]
      },
    },
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
  };
  return Place;
};
