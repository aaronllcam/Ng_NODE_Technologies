const express = require('express');
const server = express();
const router = express.Router();
const cors = require('cors');
const { Technology } = require('../models');
const path = require("path");
const { stringify } = require('querystring');


//Middlewares
server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

server.get("/api/technologies", async (req,res) => {
    try {

        let technologies = await Technology.find();
        technologies = technologies.map((element) => {
            element.logo = `${req.protocol}://${req.headers.host}/img/${element.logo}`;
            return element;
        })

        return res.send({error: false, data: technologies});
        
    } catch (error) {
        return res.send({error: true, msg: "Error en get API"});
    }
})
server.get('/api/technology/:id', async (req, res) => {

    const id = req.params.id;
    try {

        let technology = await Technology.findOne({_id:id});
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;

        return res.send({error: false, data: technology});

    } catch (error) {
        return res.send({error: true, msg: "Cant not get by id"});
        
    }
})

server.get("/api/technology/search/:name", async (req,res) => {
    

    try {
        const { name } = req.params;
        const regEx = new RegExp(name, 'ig');
        let technologies = await Technology.find({name: regEx}).exec();
        technologies = technologies.map((element) => {
            element.logo = `${req.protocol}://${req.headers.host}/img/${element.logo}`;
            return element;
        })

    return res.send({ error: false, data: technologies });
        
    } catch (error) {
        return res.send({ error: true, msg: "No encontrado" });
    }
})



module.exports = server;