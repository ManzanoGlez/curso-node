const express = require("express");
const app = express();

const hbs = require("hbs");
require("./hbs/helpers");


const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

//Express HBS
hbs.registerPartials(__dirname + "/views/partials",  (err) =>{});

app.set("view engine", "hbs");


app.get("/", function (req, res) {
  res.render("home",{
    name:"manzano"
  });
});  

app.get("/nosotros", function (req, res) {
  res.render("about");
});



app.get("/data", function (req, res) {

  let output = {
    name: "Jorge Manzano",
    years: "24",
    status: "La verga",
  };

  res.send(output);
});

app.listen(PORT,()=>{
  console.log(`Trabajando desde puerto ${PORT}`)
});
