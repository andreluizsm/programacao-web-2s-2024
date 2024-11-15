const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Message = sequelize.define("Message", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Message;
