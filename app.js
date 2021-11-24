const express = require ("express")
const ejs = require("ejs")
const app = express()


app.get("/home", function(request, response)
{
    response.render("home.ejs")
})
app.get("/data", function(request, response){
    response.render("data.ejs")
})


app.listen(8000, function()
{
    console.log("server is running at 8000 port")
})

