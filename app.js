const express = require("express");
const app = express();
const router = require('./router');

//setting view engine to ejs
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', router);

app.listen(80, ()=>{
    console.log("Servidor corriendo desde https://localhost:8001")
});
