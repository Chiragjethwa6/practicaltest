const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const bodyParser = require('body-parser');

app.listen(3000,() => {
    console.log("listening to 3000 port")
});

mongoose.connect("mongodb://localhost:27017/audioDatabase", {
   useNewUrlParser: true,
   useUnifiedTopology: true
},(err) => {
    if(err){
        console.log("error in db connection")
    }else{
        console.log("db connection established")
    }
});

app.use(bodyParser.json());
app.use('/',routes);


