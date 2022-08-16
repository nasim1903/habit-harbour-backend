const router = require('express').Router()
const exerciseController = require('../controllers/exercise')

router.get('/:username/exercise/target', exerciseController.findExerciseTarget)
router.post('/:username/exercise/target', exerciseController.createExerciseTarget)
router.get('/:username/exercise/days', exerciseController.findExerciseDays)
router.post('/:username/exercise/days', exerciseController.createExerciseDays)


module.exports = router;
