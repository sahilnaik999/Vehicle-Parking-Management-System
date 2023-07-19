const express=require("express");
const app=express();



const bodyparser=require("body-parser");
const mongoose=require("mongoose");
const port=3000;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/vehiclerecord",{
    useNewUrlParser:true,
    useUnifiedTopology:true
    // useCreateIndex:true
});
const db=mongoose.connection;
db.on('error',()=>console.log("error in connecting to database"));
db.once('open',()=>console.log("connected to database"));

//routing
app.post("/",(req,res)=>{
    var name=req.body.names;
    var contact=req.body.contacts;
    var vehicle=req.body.vehicletypes;
    var vehicleno=req.body.vehiclenumbers;
    var time=req.body.entrytimes;

    var data={
        "name":name,
        "contact":contact,
        "vehicle Type":vehicle,
        "vehicle No":vehicleno,
        "time":time
    }
    db.collection('record').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
       console.log("Inserted successfully");
       
    });
    return res.redirect('success.html')

})

app.get("/",(req,res)=>{
   res.send("Namaste")
   res.set({
    "Allow-access-Allow-Origin": '*'
   })
   return res.redirect('index.html');
});

app.listen(port);