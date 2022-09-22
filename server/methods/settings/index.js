const Settings = require('../../models/Settings');
const isArray = require('lodash.isarray');

const getSettings = async () => {
    const settingsList = await Settings.find();

    if (!settingsList) {
        throw new Error('No Settings found');
    }

    return isArray(settingsList)
        ? settingsList[0]
        : {};
}

const decrementRound = async () => {
    const settings = await getSettings();

    const settingsNew = await Settings.findOneAndUpdate(
        {_id: settings._id},
        {
            currentRound: settings.currentRound - 1,
            redTeamErrors: 0,
            blueTeamErrors: 0,
            isAnswersViewModeOn: false,
            generalScore: 0,
        },
        {new: true}
    )

    return settingsNew;
}

const incrementRound = async () => {
    const settings = await getSettings();

    const settingsNew = await Settings.findOneAndUpdate(
        {_id: settings._id},
        {
            currentRound: settings.currentRound + 1,
            redTeamErrors: 0,
            blueTeamErrors: 0,
            isAnswersViewModeOn: false,
            generalScore: 0,
        },
        {new: true}
    )

    return settingsNew;
}

const decrementTeamErrors = async (team) => {
    const settings = await getSettings();
    const updateData = {};

    if (team === 'red') {
        updateData.redTeamErrors = settings.redTeamErrors - 1;
    } else if (team === 'blue') {
        updateData.blueTeamErrors = settings.blueTeamErrors - 1;
    }

    const settingsNew = await Settings.findOneAndUpdate(
        {_id: settings._id},
        updateData,
        {new: true}
    )

    return settingsNew;
}

const incrementTeamErrors = async (team) => {
    const settings = await getSettings();
    const updateData = {};

    if (team === 'red') {
        updateData.redTeamErrors = settings.redTeamErrors + 1;
    } else if (team === 'blue') {
        updateData.blueTeamErrors = settings.blueTeamErrors + 1;
    }

    const settingsNew = await Settings.findOneAndUpdate(
        {_id: settings._id},
        updateData,
        {new: true}
    )

    return settingsNew;
}

const toggleAnswersViewMode = async () => {
    const settings = await getSettings();

    const settingsNew = await Settings.findOneAndUpdate(
        {_id: settings._id},
        {isAnswersViewModeOn: !settings.isAnswersViewModeOn},
        {new: true}
    )

    return settingsNew;
}

const updateGeneralScore = async (score) => {
    const settings = await getSettings();

    const settingsNew = await Settings.findOneAndUpdate(
        {_id: settings._id},
        {generalScore: score},
        {new: true}
    )

    return settingsNew;
}

const giveScoreToTeam = async (team) => {
    const settings = await getSettings();
    const updateData = {
        generalScore: 0,
        isAnswersViewModeOn: true,
    };

    if (team === 'red') {
        updateData.redTeamScore = settings.redTeamScore + settings.generalScore;
    } else if (team === 'blue') {
        updateData.blueTeamScore = settings.blueTeamScore + settings.generalScore;
    }

    const settingsNew = await Settings.findOneAndUpdate(
        {_id: settings._id},
        updateData,
        {new: true}
    )

    return settingsNew;
}

module.exports = {
    getSettings,
    decrementRound,
    incrementRound,
    decrementTeamErrors,
    incrementTeamErrors,
    toggleAnswersViewMode,
    updateGeneralScore,
    giveScoreToTeam,
};
