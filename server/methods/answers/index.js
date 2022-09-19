const Answers = require('../../models/Answers');

const getAnswers = async () => {
    const answers = await Answers.find();

    if (!answers) {
        throw new Error('No Answers found');
    }

    return answers;
}

module.exports = {
    getAnswers,
};
