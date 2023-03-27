const express = require("express");
const app = express();

// Estou dizendo para o Express usar o EJS como View engine
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/perguntar",(req,res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta",(req,res) => {
    res.send("Formulario recebido!")
})

app.listen(8080,() => {
    console.log("App rodando!");
});