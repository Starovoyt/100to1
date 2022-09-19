const Rounds = require('../../models/Rounds');

const getRounds = async () => {
    const rounds = await Rounds.find();

    if (!rounds) {
        throw new Error('No Rounds found');
    }

    return rounds;
}

module.exports = {
    getRounds,
};
