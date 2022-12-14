const {Router} = require('express')
const {getSettings} = require('../../methods/settings')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const settings = await getSettings();
        res.status(200).json(settings);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
