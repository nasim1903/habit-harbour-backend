const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/', userController.createUser)
router.get('/:username', userController.findUser)

module.exports = router
