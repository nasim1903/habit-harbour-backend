const router = require('express').Router()
const userController = require('../controllers/user')
const habitsController = require('../controllers/habits')
const verifyToken = require('../middleware/verifyToken')

// router.use(verifyToken) // make this as a comment for developing purposes 

router.get('/', userController.findAll) 
router.get('/:username', userController.findUser) 
router.get('/:username/habits', habitsController.showHabits) 

router.post('/:username/habits', habitsController.updateHabits)
router.post('/:username/habits/increment-streak', habitsController.incrementStreak)


module.exports = router
