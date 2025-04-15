const express = require('express');
const User = require('../models/UserModel');
const router = express.Router();


router.get("/getAll", async(req,res)=>{
    try{
        const result = await User.find();
        if (result){
            res.send(result);
            console.log("requite bien recu ");

        }else{
            res.status(400).json("failed");
            console.log("est vide ");
        }
    } catch (erreur){
        
            res.status(400).json(erreur);
        
    }
});

router.post("/add", async (req,res)=>{
    try {
        const newUser = new User(req.body);
        await newUser.save();
        console.log("ca marche")
    } catch(error){
        console.log(error);
    }
})
router.get('/welcom', (req,res)=> {
    res.send('bienvenu User');
})


module.exports = router;