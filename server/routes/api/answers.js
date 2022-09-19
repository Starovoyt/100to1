const {Router} = require('express')
const {getAnswers} = require('../../methods/answers')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const answers = await getAnswers();
        res.status(200).json(answers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
