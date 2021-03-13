const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    name:String,
    post:String,
    Age:Number,
    Description:String
});

const player = mongoose.model('Player', playerSchema);
module.exports = player;