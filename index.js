const express = require('express');
const port = 8000;

const app = express();






app.get('/',function(req,res){
    return res.send('Hola');
})


app.listen(port, function(err){
    if(err){
        console.log("error firing up the server");
        return;
    }
    console.log("The server is fired up on port", port);
    return;
})