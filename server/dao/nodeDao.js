const audioSchema = require("./schemas/audioSchema");
const loginSchema = require("./schemas/loginSchema");
module.exports = async function getdata(){
    try{
        const result = await audioSchema.find();
        return result;
    }catch(e){
        console.log("error in getting data from DB : "+e);
    }
    
}

module.exports = async function addAudioData(audioObj){
    try{
        const result = await audioSchema.save(audioObj);
        return result;
    }catch(e){
        console.log("error in adding data into DB : "+e);
    }
    
}

module.exports = async function deleteData(name){
    try{
        const result = await audioSchema.deleteOne(name);
        return result;
    }catch(e){
        console.log("error in deleting data from DB : "+e);
    }
   
}

module.exports = async function updateData(old_name,audioObj){
    try{
        const result = audioSchema.findByIdAndUpdate(old_name,{ $set : audioObj },{ new : true });
        return result;
    }catch(e){
        console.log("error in updating data into DB : "+e);
    }
}

module.exports = async function verifyUser(obj){
    try{
        const result = loginSchema.find();
        if (result.username == obj.username && result.password == obj.password){
            return true;
        }
    }catch(e){
        console.log("error in updating data into DB : "+e);
    }
}


