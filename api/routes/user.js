const router = require('express').Router()
const userController = require('../controllers/user')

router.get('/:username', userController.findUser)
router.get('/:username/water/target', userController.findWaterTarget)
router.post('/:username/water/target', userController.createWaterTarget)

router.get('/', userController.findAll)
// router.post()

module.exports = router
