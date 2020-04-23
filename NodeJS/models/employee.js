const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    comment: { type: String }
   
});

module.exports = { Employee };