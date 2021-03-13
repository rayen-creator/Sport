const mongoose = require('mongoose');
const matchSchema = mongoose.Schema({
    logo1: String,
    team1: String,
    score1: Number,
    score2: Number,
    team2: String,
    logo2: String
});

const match = mongoose.model('Match', matchSchema);
module.exports = match;