const {Router} = require('express')
const {getRounds} = require('../../methods/rounds')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const rounds = await getRounds();
        res.status(200).json(rounds);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
