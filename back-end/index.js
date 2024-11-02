const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user.model');   
const recipeRoutes = require('./routes/recipeRoutes')
const bodyParser = require('body-parser');
const URL = "mongodb+srv://john_44:john44@cluster0.6jube.mongodb.net/myAppDatabase?retryWrites=true&w=majority&appName=Cluster0"

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// middleware to parse JSON bodies
app.use(bodyParser.json());

// connect to MongoDB
mongoose.connect(URL,{
    
})
.then(()=>{
    console.log('connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB:',err.message); 
})

// post route for register a new user
app.post('/signup',async (req,res)=>{
const {name,email,password}= req.body;
// create a new user instance
const newUser = new User({name,email,password});
try{
    await newUser.save();
    res.json({success:true,message:'User registered successfully'});
}catch(err){
    res.status(500).json({success:false,message:'Error in registration',error:err.message})
}
});

// Login route for registered user
app.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user || user.password !== password){
            return res.status(400).json({success:false,message:'Invalid Login credentials'});
        }
        return res.status(200).json({
        success:true,
            
        message:'Login successful'});
    }catch(error){
        res.status(500).json({success:false,message:'Error Logging in',error});
    }
});

// use recipe routes
app.use('/api/recipes',recipeRoutes);

// add a GET route for the root URL('/')
app.get('/',(req,res)=>{
    res.send('welcome to the Home page!')
});

// error handling
app.use((req,res)=>{
    res.status(404).send('Not Found');
})

// start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
});