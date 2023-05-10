const { response, request } = require('express');
const { artists } = require('../models/artistmodel.js');
const { roles } = require('../models/rolemodel.js');
const {event_desc} = require('../models/eventmodel.js');
const db = require('../models');
const { sequelize } = require('../models');

const Artist = db.artists
const Role = db.roles
const PostImg = db.postImages ;
const event = db.events;

const addEvent = async (req, res) => {

  
    let data = {

        event_desc : req.body.event_desc,
        artist_id:req.body.artist_id

    }

    const eventData = await event.create(data);

    res.send(eventData)
}


const getEventDetails = async (req,res)=>{
     let artist_id= req.params.id
     const details = await  event.findAll()
     res.send(details)
 }


// const getAllArtistPostIMages= async(req,res)=>{
//     let artist_id=2;
//     const data = await Artist.findAll({
//             include:[{
//                 model:PostImg,

//             }],
//           where:{artist_id:artist_id}
//     })
//     res.send(data)
// }

module.exports = {
  addEvent,
  getEventDetails
}
