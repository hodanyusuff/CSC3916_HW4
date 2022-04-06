var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB, { useNewUrlParser: true });


try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}

//review schema
var ReviewSchema = new Schema({
    name: { type: String, required: true, index: { unique: true }},
    quote: { type: String, required: true },
    rating: { type: Number, min: [1, 'Must be greater than 0'], max: [5, 'Must be less than 6']},

});

module.exports = mongoose.model('Review', ReviewSchema);


