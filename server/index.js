const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment
 } = require('./controller')

 const { 
    getFortune
 } = require('./controller')

 const { 
    getGames,
    postGames,
    editGames,
    deleteGames
 } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/compliment", getFortune);
app.get("/api/games", getGames);
app.delete("/api/games/:id", deleteGames)
app.put("/api/games", editGames)
app.post("/api/games/:id", postGames)

app.listen(5006, () => console.log("Server running on 5006"));


