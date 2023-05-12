const express = require("express");
const handlebars = require("express-handlebars");
const {usuarios} = require("./usuarios")

const app = express()
const PORT = 8080

app.use(express.json());
app.use(express.urlencoded());

app.engine("hbs",handlebars.engine());
app.set("views",__dirname+"/views");
app.set("view engine","hbs");

app.use(express.static("./public"))

app.get("/usuarios", (req, res) => {

    res.render("usuarios",{usuarios})

});


app.listen(PORT,()=>{console.log("app funcionando")})