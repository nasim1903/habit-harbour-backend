const router = require('express').Router()
const userController = require('../controllers/user')

router.get('/:username', userController.findUser)
router.get('/', userController.findAll)
// router.post()

module.exports = router
