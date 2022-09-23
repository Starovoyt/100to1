const Players = require('../../models/Players');

const getPlayers = async () => {
    const players = await Players.find();

    if (!players) {
        throw new Error('No Players found');
    }

    return players;
}

const setPlayerAnswer = async (playerId, answer) => {
    const player = await Players.findById(playerId);
    const playerAnswers = player.answers;

    const answerIndex = playerAnswers
        .findIndex((curAnswer) => curAnswer.order === answer.order);

    if (answerIndex >= 0) {
        playerAnswers[answerIndex] = answer;
    } else {
        playerAnswers.push(answer);
    }

    await Players.findOneAndUpdate(
        {_id: playerId},
        {answers: playerAnswers},
        {new: true}
    );

    return await getPlayers();
}

module.exports = {
    getPlayers,
    setPlayerAnswer,
};
