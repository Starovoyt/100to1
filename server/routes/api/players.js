const {Router} = require('express')
const {getPlayers} = require('../../methods/players')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const players = await getPlayers();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
