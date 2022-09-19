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

module.exports = {
    getSettings,
};
