const express = require("express");
const router = express.Router();
const services = require('../services/services');

router.post('/login',async (req,res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;
        const obj = {
            username : username,
            password : password
        }
        const verifyUser = await services.verifyUser(obj);
        if(verifyUser){
            res.status(200).send({"status" : "Success", "Message" : "User logged in successfully"});
        }else{
            res.status(400).send({"status" : "Failed", "Message" : "Check your credentials and login again"});
        }
    }catch(e){
        console.log("Unable to fetch data from database "+e);
    }
})

router.get('/getAudioData',async (req,res) => {
    try{
        const getData = await services.getData();
        if(getData.length > 0){
            res.status(200).send({"status" : "Success", "Message" : "Data fetched successfully"});
        }else{
            res.status(200).send({"status" : "Success", "Message" : "No data present in database"});
        }
    }catch(e){
        console.log("Unable to fetch data from database "+e);
    }
});

router.post('/addAudioData',async (req,res) => {
    try{
        const name = req.body.name.trim();
        const image = req.body.image;
        const description = req.body.description.trim();
        const song = req.body.song;
        const audioObj = {
            name : name,
            image : image,
            description : description,
            song : song
        }
        const addAudioData = await services.addAudioData(audioObj);
        if(addAudioData){
            res.status(200).send({"status" : "Success", "Message" : "Data added successfully"});
        }else{
            res.status(400).send({"status" : "Failed", "Message" : "Error in adding data into db"});
        }
    }catch(e){
        console.log("Unable to fetch data from database "+e);
    }
});

router.delete('/deleteAudioData',async (req,res) => {
    try{
        const name = req.query.name;
        const deleteData = await services.deleteData(name);
        if(deleteData){
            res.status(200).send({"status" : "Success", "Message" : "Data deleted successfully"});
        }else{
            res.status(400).send({"status" : "Failed", "Message" : "Error in deleting data"});
        }
    }catch(e){
        console.log("Unable to fetch data from database "+e);
    }
});

router.put('/updateAudioData/:name',async (req,res) => {
    try{
        const old_name = req.params.name;
        const name = req.body.name;
        const image = req.body.image;
        const description = req.body.description;
        const song = req.body.song;
        const audioObj = {
            name : name,
            image : image,
            description : description,
            song : song
        }
        const updateData = await services.updateData(old_name,audioObj);
        if(updateData){
            res.status(200).send({"status" : "Success", "Message" : "Data updated successfully"});
        }else{
            res.status(400).send({"status" : "Failed", "Message" : "error in updating data"});
        }
    }catch(e){
        console.log("Unable to fetch data from database "+e);
    }
});


module.exports = router;