const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./keys').mongoURI;
const mongoose = require('mongoose');
const cors = require('cors');
const passportSetUp = require('./passport');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err));

//passport middleware
app.use(passportSetUp.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/cities', require('./routes/cities'));
app.use('/accounts', require('./routes/account'));
app.use('/logIn', require('./routes/logIn'));

app.get(
  '/',
  passportSetUp.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('ok');
  }
);

app.listen(port, () => console.log(`Server running on port ${port}`));
