const express = require('express')
const app = express();
require("./conectdb.js");
const userRoute = require("./routes/UserRoute.js")
app.use('/api/user',userRoute);

app.get("/getAllUser",(req,res)=>{
    res.send("Voici tous les utilisateurs");
})
app.post("/addUser", (req, res)=>{
    console.log("Utilisateur est ajoute ");
})
app.listen("5000", ()=> {
    console.log("server run with port 5000");
}
)
