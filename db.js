/*const Sequelize = require("sequelize");

const db = new Sequelize(
  "postgres://ititgzusuanudv:668ac3dcba26593a96c2a4e589f3328709eb7a16a0e07898032152537636c4c5@ec2-54-228-125-183.eu-west-1.compute.amazonaws.com:5432/d757up2m55747"
);
const data = db.define("anime", {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
});
db.sync({ force: true }).then(() => {
  this.Anime.create({
    title: "test",
    content: "tost",
  });
});

module.exports = {
  db,
};*/
/*

const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DATABASE_DB,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
  },
  {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  }
);
*/
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
/*let mute = async function () {
  await Sequelize.authenticate();
};
mute();*/
