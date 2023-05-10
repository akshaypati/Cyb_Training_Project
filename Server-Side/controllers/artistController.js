const {response, request} = require('express');
const { users } = require('../models/usermodel.js');
const { roles } = require('../models/rolemodel.js');
const { artists } = require('../models/artistmodel.js')
const db = require('../models');
const { sequelize } = require('../models');
const bcrypt = require('bcrypt');

const User = db.users
const Role = db.roles
const Artist =db.artists

//creating person

const addArtist = async  (req,res) => {
    let password =req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);    

    let roleInfo = {
        role:req.body.role
    }

    const roleData = await Role.create(roleInfo);

    if(roleData && roleData.role){
        
            let userInfo = {
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
            age:req.body.age,
            gender:req.body.gender,
            artform:req.body.artform,
            contact:req.body.contact,
            role_id:roleData.role_id
          
        }

        const userData = await Artist.create(userInfo);

        res.status(200).send(userData)
        console.log(userData);

    }


    
}




// const userRegistration = async (req,res)=>{
//     let name= req.body.name;
//     let email = req.body.email;
//     let 
// }

module.exports = {
  addArtist

}