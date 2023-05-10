const express = require('express')
const cors = require('cors')

const app = express()


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

//middlewares
app.use(cors(corsOptions));
app.use(express.json()) //this line is for server will accept data in the form of json
app.use(express.urlencoded({extended:true}))


//routers
 const router = require('./routes/personsRouter.js')
app.use('/api', router)  // this wil be base api and after that routes api for products should use
//if we have another routers we can add here


//testing apis
app.get('/', (req,res) =>  {
    res.json({ message : 'hello from api'})
})


//port
const port = process.env.port || 8080

//server
app.listen(port, ()  => {
    console.log(`server is running on port ${port}`);
})