"use strict";
module.exports = (sequelize, DataTypes) => {
  const videos = sequelize.define(
    "videos",
    {
      videoUrl: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      contentType: DataTypes.STRING,
      caption: DataTypes.STRING,
    },
    {}
  );
  videos.associate = function (models) {
    // associations can be defined here
    models.videos.hasMany(models.comments);
    models.videos.belongsTo(models.user);
  };
  return videos;
};
