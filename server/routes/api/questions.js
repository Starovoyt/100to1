const {Router} = require('express')
const {getQuestions} = require('../../methods/questions')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const question = await getQuestions();
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
