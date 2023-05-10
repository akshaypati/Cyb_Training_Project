const { response, request } = require("express");
const { users } = require("../models/usermodel.js");
const { roles } = require("../models/rolemodel.js");
const db = require("../models");
const { sequelize } = require("../models");
const bcrypt = require("bcrypt");

const User = db.users;
const Role = db.roles;
const Artist = db.artists;

//creating person

const addUser = async (req, res) => {
  let password = req.body.password;

  const hashedPassword = await bcrypt.hash(password, 10);

  let roleInfo = {
    role: req.body.role,
  };

  const roleData = await Role.create(roleInfo);

  if (roleData && roleData.role) {
    let userInfo = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      age: req.body.age,
      gender: req.body.gender,
      contact: req.body.contact,
      address: req.body.address,
      profession: req.body.profession,
      role_id: roleData.role_id,
    };

    const userData = await User.create(userInfo);

    res.status(200).send(userData);
  }
};

const checkLogin = async (req, res) => {
  let cEmail = req.body.email;

  let cPassword = req.body.password;

  const user = await User.findOne({ where: { email: cEmail } });
  const artist = await Artist.findOne({ where: { email: cEmail } });

  if (user) {
    const passwordValidate = await bcrypt.compareSync(cPassword, user.password);
    if (passwordValidate) {
      // res.send("Login done !!!!!!!");
      const role = "user"; //here we have to add object in array for local storage
      res.send(role);
    } else {
      res.send({ message: "wrong password" });
    }
  } else if (artist) {
    const passwordValidate = await bcrypt.compareSync(
      cPassword,
      artist.password
    );
    if (passwordValidate) {
      const role = "artist";
      res.send(role);
      // res.send("Login done !!!!!!!");
    } else {
      res.send({ message: "wrong password" });
    }
  } else {
    res.send({ message: "Not Registered" });
  }
};

module.exports = {
  addUser,
  checkLogin,
};
