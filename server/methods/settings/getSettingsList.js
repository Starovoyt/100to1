const Settings = require('../../models/Settings');

exports.getSettingsList = async function () {
    const settingsList = await Settings.find();

    if (!settingsList) {
        throw new Error('No Settings found');
    }

    return settingsList;
}

