const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    aquire: dbConfig.pool.aquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected...!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.roles = require("./rolemodel.js")(sequelize, DataTypes);
db.users = require("./usermodel.js")(sequelize, DataTypes);
db.artists = require("./artistmodel.js")(sequelize, DataTypes);
db.imgprofs = require("./profileImage")(sequelize, DataTypes);
db.events = require("./eventmodel")(sequelize, DataTypes);

//user relation
db.roles.hasOne(db.users, {
  foreignKey: "role_id",
});

db.users.belongsTo(db.roles, {
  foreignKey: "role_id",
});

//artist relation
db.roles.hasOne(db.artists, {
  foreignKey: "role_id",
});

db.artists.belongsTo(db.roles, {
  foreignKey: "role_id",
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync is done  !!");
});

//artistdata to profimgtable 1 to one
db.artists.hasOne(db.imgprofs, {
  foreignKey: "artist_id",
});
//roles and artist
db.imgprofs.belongsTo(db.artists, {
  foreignKey: "artist_id",
});

//event and artist one to one relation
db.artists.hasOne(db.events, {
  foreignKey: "artist_id",
});
//
db.events.belongsTo(db.artists, {
  foreignKey: "artist_id",
});

module.exports = db;
