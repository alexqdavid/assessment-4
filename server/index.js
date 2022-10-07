const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    //getComplimentOne,
    //deleteCompliment,
    //createCompliment,
    //updateCompliment
 } = require('./controller')

app.get(`/api/compliment`, getCompliment);
//app.get(`/api/compliment`, getComplimentOne);
//app.delete(`/api/compliment/:id`, deleteCompliment)
//app.post(`/api/compliment`, createCompliment)
//app.put(`/api/compliment/:id`, updateCompliment)

app.listen(5006, () => console.log("Server running on 5006"));


