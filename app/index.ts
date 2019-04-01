'use strict';
const dot = require('dotenv');
const Hapi = require('hapi');
const result = dot.config();
let UserRepo = require('./dbaccess/useraccess');

//get global routes
const routes = require('./routes/usersroutes');

// Create a server with a host and port
const server = Hapi.server({
    host: '0.0.0.0',
    port: 8000
});

server.route(routes);

// Start the server
const start = async function () {
    try {
        await server.start();
        let userRepo = new UserRepo();
        await userRepo.devInitializeDB();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
};

start();