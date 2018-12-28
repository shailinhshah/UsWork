const express = require('express')
var path    = require("path");
const app = express()
const port = 8080


var times = {};

app.set('view engine', 'pug')

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/:room', function (req, res) {
  res.render('room', { room: req.params.room})
})

app.get('/api/:room', function (req, res) {
	//console.log(times[req.params.room]);
	res.send(""+times[req.params.room]);
});


app.post('/api/:room', function (req, res) {
	times[req.params.room] = Date.now();
  res.send("Success");
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
