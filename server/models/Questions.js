const {Schema, model} = require('mongoose');

const QuestionsSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    round: {
        type: Number,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
});

const Questions = model('questions', QuestionsSchema);

module.exports = Questions;
