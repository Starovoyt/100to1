const Questions = require('../../models/Questions');

const getQuestions = async () => {
    const questions = await Questions.find();

    if (!questions) {
        throw new Error('No Questions found');
    }

    return questions;
}

module.exports = {
    getQuestions,
};
