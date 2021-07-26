'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    placeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Places' }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // Review.hasOne('Place', { foreignKey: 'placeId' });
    // Review.hasOne('User', { foreignKey: 'userId'})
  };
  return Review;
};
