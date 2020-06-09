module.exports = (sequelize, Sequelize) => {
  const ucd = sequelize.define("ucd", {
    uid: {
      type: Sequelize.INTEGER,
    },
    fullname: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
    DOB: {
      type: Sequelize.STRING,
    },
    adhaar: {
      type: Sequelize.STRING,
    },
    licence: {
      type: Sequelize.STRING,
    },
  });
  return ucd;
};
