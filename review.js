require('dotenv').config({path:envPath});
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let User = require('../Users');


chai.should();

chai.use(chaiHttp);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}

//review schema
var ReviewSchema = new Schema({
    name: { type: String, required: true, index: { unique: true }},
    quote: {type: string, required: true, index: {unique: true}},
    rating: {type: string, required: true, index: {unique: true}},

});

module.exports = mongoose.model('Review', ReviewSchema);


