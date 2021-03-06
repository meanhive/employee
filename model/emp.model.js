// db schema design

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// declaring collection schema property names and types

let Employee = new Schema(
  {
    // schema property and type
    name: { type: String },
    gender: { type: String },
    empid: { type: String },
    email: { type: String },
    mobile: { type: String },
    salary: { type: Number }
  },
  {
    // collection string
    collection: 'employee'
  }
);

module.exports = mongoose.model('Emp', Employee);
