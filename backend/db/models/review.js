'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    placeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Place, { foreignKey: 'placeId' });
    Review.belongsTo(models.User, { foreignKey: 'userId'})
  };
  return Review;
};
