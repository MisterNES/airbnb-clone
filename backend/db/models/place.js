'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 150]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 20]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 20]
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
    Place.hasMany(models.Booking, { foreignKey: 'placeId'})
    Place.hasMany(models.Review, { foreignKey: 'placeId'})
  };
  return Place;
};
