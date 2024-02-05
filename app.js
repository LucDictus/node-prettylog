const http = require('http');
const express = require('express');
const app = express();

function log(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

function welcome(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write('{"naam": "Piet"}');
    res.end();

    next();
}

function listUsers(req, res, next) {
    // geef terug '{"users":[{"name": "Piet"},{"name": "Jan"},{"name": "Marie"}]}'
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write('{"users":[{"name": "Piet"},{"name": "Jan"},{"name": "Marie"}]}');
    res.end();

    next();
}

// Bij post-request op: http://localhost/users/
// Voer functie log en (nieuwe) middleware function addUser.
// addUser geeft dit terug: '{"msg":"user added"}'
function addUser(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write('{"msg":"user added"}');
    res.end();

    next();
}

app.use('/test/', log, welcome);
app.use('/users/', log, listUsers);
app.post('/users/', log, addUser);

http.createServer(app).listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
    console.log('Server is running at http://localhost:3000/test/');
    console.log('Server is running at http://localhost:3000/users/');
});