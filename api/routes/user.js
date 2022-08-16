const router = require('express').Router()
const userController = require('../controllers/user')
const waterController = require('../controllers/water')
const exerciseController = require('../controllers/exercise')

router.get('/:username', userController.findUser)
router.get('/:username/water/target', userController.findWaterTarget)
router.post('/:username/water/target', userController.createWaterTarget)
router.get('/:username/water/days', userController.findWaterDays)
router.post('/:username/water/days', userController.updateWaterDays)

//Exercise routes
router.get('/:username/exercise/target', userController.findExerciseTarget)
router.post('/:username/exercise/target', userController.createExerciseTarget)
// router.get('/:username/exercise/days', userController.findExerciseDays)
// router.post('/:username/exercise/days', userController.updateExerciseDays)

router.get('/', userController.findAll)


module.exports = router
