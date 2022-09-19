const {Schema, model} = require('mongoose');

const RoundsSchema = new Schema({
    name: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Rounds = model('rounds', RoundsSchema);

module.exports = Rounds;
