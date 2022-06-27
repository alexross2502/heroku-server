const Sequelize = require("sequelize");

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
};

/*const { Sequelize } = require("sequelize");

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
);*/
