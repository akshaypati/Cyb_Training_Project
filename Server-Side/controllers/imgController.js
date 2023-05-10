const { response } = require('express');
const {imgprofs}  =require('../models')
const db = require('../models');

//create model

const imgprof = db.imgprofs;

const  addprofileImage = async (req,res)=>{
    
    let info = {
        
        image:req.file.filename,
        artist_id:req.body.artist_id
        
    }
    debugger
    
    console.log(info.artist_id)
    const image = await imgprof.create(info);
    res.send(image);
    console.log(image);
}

const getProfileImage = async (req,res)=>{
 let artist_id= req.params.id
    // const image = await  imgprof.findAll({where:{artist_id:artist_id}})
    const image = await  imgprof.findAll()
    res.send(image)
}

module.exports={
    addprofileImage,
    getProfileImage
}
