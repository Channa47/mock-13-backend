const express = require('express');
const connection = require('./congiq/db')
const UserRoute = require('./Routes/UserRoute')
const cors = require('cors')
const app = express();
app.use(cors({origin:"*"}))
app.use(express.json())
app.use('/user',UserRoute)


let  generaterandom = (length,characters) =>{
    let result = ' ';
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

app.get("/",(req,res)=>{
    let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomWord = generaterandom(5,characters);
    res.send(randomWord);
})
app.listen(8080,async()=>{
    try{
        connection;
        console.log("Connected To DB")
    }catch(e){
        console.log(e)
    }
    console.log("Started");
})