const {Schema, model} = require('mongoose');

const SettingBackupSchema = new Schema({
    generalScore: {
        type: Number,
        required: true,
    },
    currentRound: {
        type: Number,
        required: true,
    },
    blueTeamScore: {
        type: Number,
        required: true,
    },
    blueTeamErrors: {
        type: Number,
        required: true,
    },
    redTeamScore: {
        type: Number,
        required: true,
    },
    redTeamErrors: {
        type: Number,
        required: true,
    },
});

const SettingsBackup = model('settings-backup', SettingBackupSchema);

module.exports = SettingsBackup;
