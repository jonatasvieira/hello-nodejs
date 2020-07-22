var express = require('express');

var app = express();

const mapa = [ {a: "a", b: "b", c: "c"}]

app.get('/', (req, res) => { res.send("Hello Openshift.")});

app.listen(8080, function(){
    console.log('Listening on port 8080');
});

module.exports = app;