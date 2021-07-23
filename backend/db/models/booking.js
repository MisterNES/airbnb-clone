'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    placeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {});
  Booking.associate = function(models) {
    Booking.hasOne(User, { foreignKey: 'userId' });
    Booking.hasOne(Place, { foreignKey: 'placeId'});
  };
  return Booking;
};
