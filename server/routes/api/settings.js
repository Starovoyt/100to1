const {Router} = require('express')
const {getSettingsList} = require('../../methods/settings/getSettingsList')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const settingsList = await getSettingsList();

        res.status(200).json(settingsList);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
