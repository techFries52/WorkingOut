const express = require('express');
const app = express();
const port = 3001;
const uri = "mongodb://localhost:27017/workouts";
const mongoose = require('mongoose');
const Workouts = require("./models/workouts");

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connection.on('connected', () => {
	console.log('connected to mongoDB');
});
mongoose.connection.on('error' , err => {
	console.log('error connecting to mongodb');
	console.log(err);
});

app.get('/getworkouts', async function(req, res) {
  const workouts = await Workouts.find({});
  res.send({ workouts });
  console.log(workouts);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})