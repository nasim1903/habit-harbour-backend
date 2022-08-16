const router = require('express').Router()
const waterController = require('../controllers/water')

router.get('/target', waterController.findWaterTarget)
router.post('/target', waterController.createWaterTarget)
router.get('/days', waterController.findWaterDays)
router.post('/days', waterController.createWaterDays)

module.exports = router
