const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

// criando o servidor
const server = express();

// database
mongoose.connect('mongodb://localhost/dbilake', {useNewUrlParser: true})
    .then(() => console.log('Connected to database!'))
    .catch(err => console.error(err));

// permitindo o server ser acessado de qlqr lugar
server.use(cors());

// MIDDLEWARE
// allows to create an user from a form
server.use(express.urlencoded({extended: true}))
// server will receive json info
server.use(express.json());

// Routes
server.use(routes);


server.listen(3333, () => console.log('Server has started on port 3333'));