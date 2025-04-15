const mongoose  = require('mongoose')
const URL = "mongodb+srv://stagerie-benyounesweb:benyounesweb@cluster0.3oyqbz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/livreurpfe";

mongoose.connect(URL).then(
    ()=>{
        console.log("connected mongoDB")
    }
).catch(
    (err)=>{
        console.log(err)
    }
)