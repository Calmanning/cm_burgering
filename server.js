const express = require("express");

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//brining in handlebars:
const exprshdbs = require("express-handlebars");

app.engine("handlebars", exprshdbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controller/burgerControl.js")

app.use(routes);

app.listen(PORT, function() {
    console.log("The server is up and you can see it at http://localhost:" + PORT);
})

