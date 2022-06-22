const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/mongoose');
const expressLayouts= require('express-ejs-layouts');



app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.static("./assets"));

app.use(expressLayouts);




app.use('/',require('./routes/index.js'));

app.set('view engine', 'ejs');

app.set('views','./views');




app.listen(port, function(err){
    if(err){
        console.log("error firing up the server");
        return;
    }
    console.log("The server is fired up on port", port);
    return;
})