const express = require('express');
const app = express();
const config = require('./config/Db');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = Number(process.env.PORT || 5000);

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// body-parser will receive post data from front end(form)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set global promise for mongoose
mongoose.Promise = global.Promise;

// connecting db
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  res => {
    console.log('Database successfully Connected');
  },
  err => {
    console.log(err);
  }
);

// Cross Origin Resource Sharing Effect (Handling ports blockages)
app.use(cors());

// connect routes
const empRoute = require('./router/emp.router');

// primary route
app.use('/', empRoute);

app.listen(PORT, function() {
  console.log(`Server is running on url http://localhost:${PORT}`);
});
