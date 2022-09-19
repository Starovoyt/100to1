const {Schema, model} = require('mongoose');

const AnswersSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    round: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
    isOpened: {
        type: Boolean,
        required: true,
    },
});

const Answers = model('answers', AnswersSchema);

module.exports = Answers;
