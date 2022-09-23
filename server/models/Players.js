const {Schema, model} = require('mongoose');

const PlayersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    answers: {
        type: Array,
    },
});

const Players = model('players', PlayersSchema);

module.exports = Players;
