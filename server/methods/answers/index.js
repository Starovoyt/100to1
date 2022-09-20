const Answers = require('../../models/Answers');

const getAnswers = async () => {
    const answers = await Answers.find();

    if (!answers) {
        throw new Error('No Answers found');
    }

    return answers;
}

const openAnswer = async (id) => {
    await Answers.findOneAndUpdate(
        {_id: id},
        {isOpened: true},
        {new: true}
    );

    return getAnswers();
}

const closeAnswer = async (id) => {
    await Answers.findOneAndUpdate(
        {_id: id},
        {isOpened: false},
        {new: true}
    );

    return getAnswers();
}

module.exports = {
    getAnswers,
    openAnswer,
    closeAnswer,
};
