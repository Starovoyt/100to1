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
        {currentRound: settings.currentRound - 1},
        {new: true}
    )

    return settingsNew;
}

const incrementRound = async () => {
    const settings = await getSettings();

    const settingsNew = await Settings.findOneAndUpdate(
        {_id: settings._id},
        {currentRound: settings.currentRound + 1},
        {new: true}
    )

    return settingsNew;
}

module.exports = {
    getSettings,
    decrementRound,
    incrementRound,
};
