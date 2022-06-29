const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  "d8nk3a4s5npj7f",
  "lbevztilrcsnnr",
  "ee80ffc29d014ad5aaee3bed9a35e82afd9cdb4a87796fe3eb401d557c3543b2",
  {
    dialect: "postgres",
    host: "ec2-54-75-184-144.eu-west-1.compute.amazonaws.com",
    port: "5432",
  },
  {
    connectionString:
      "postgres://lbevztilrcsnnr:ee80ffc29d014ad5aaee3bed9a35e82afd9cdb4a87796fe3eb401d557c3543b2@ec2-54-75-184-144.eu-west-1.compute.amazonaws.com:5432/d8nk3a4s5npj7f",
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);
