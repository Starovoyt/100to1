const Answers = require('../../models/Answers');
const SettingsMethods = require('../settings');

const getAnswers = async () => {
    const answers = await Answers.find();

    if (!answers) {
        throw new Error('No Answers found');
    }

    return answers;
}

const openAnswer = async (id) => {
    const answer = await Answers.findOneAndUpdate(
        {_id: id},
        {isOpened: true},
        {new: true}
    );

    let settings = await SettingsMethods.getSettings();

    if (!settings.isAnswersViewModeOn) {
        let score = settings.generalScore;

        if (settings.currentRound < 4) {
            score += answer.score * settings.currentRound;
        } else if (settings.currentRound === 4) {
            score += answer.score;
        }

        settings = await SettingsMethods.updateGeneralScore(score);
    }

    const answers = await getAnswers();

    return {
        answers,
        settings,
    };
}

const closeAnswer = async (id) => {
    const answer = await Answers.findOneAndUpdate(
        {_id: id},
        {isOpened: false},
        {new: true}
    );

    let settings = await SettingsMethods.getSettings();

    if (!settings.isAnswersViewModeOn) {
        let score = settings.generalScore;

        if (settings.currentRound < 4) {
            score -= answer.score * settings.currentRound;
        } else if (settings.currentRound === 4) {
            score -= answer.score;
        }

        settings = await SettingsMethods.updateGeneralScore(score);
    }

    const answers = await getAnswers();

    return {
        answers,
        settings,
    };
}

module.exports = {
    getAnswers,
    openAnswer,
    closeAnswer,
};
