const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const db = require('./keys').mongoURI;
const mongoose = require('mongoose');

//const MongoClient = require('mongoose');
// var ObjectID = require('mongodb').ObjectID;

//app.get("/", (req,res) => res.send("Hello from Express"));

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req, res) => {
//         res.send({ express: 'Hello From Express Api/Hello' });
//     });

// app.post('/api/world', (req, res) => {
//         console.log(req.body);
//         res.send(
//         `I received your POST request. This is what you sent me: ${req.body.post}`,
//     );
// });

/*
mongoose.connect("mongodb+srv://desauser:nico123@MongoCluster-fkido.mongodb.net/firstdatabase?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true}, (err, res) => {
      if (err) return console.log(err)

      console.log('Connected to DB');
})
*/
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));


    // mongoose.collection("name").save(name, (err, result) => {
    //     if(err) {
    //       console.log(err);
    //     }

    // dbase.collection("name").save(name, (err, result) => {
    //   if(err) {
    //     console.log(err);
    //   }
/*
    app.post('/name/add', (req, res, next) => {
    
      var name = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      };
  
      //console.log( req.body.first_name + " " + res.body.last_name);
  
      console.log( name);
      res.send('name added successfully');
    });
  */

    app.use('/cities', require('./routes/cities'))