const router = require('express').Router()
const waterController = require('../controllers/water')

router.get('/:username/water/target', waterController.findWaterTarget)
router.post('/:username/water/target', waterController.createWaterTarget)
router.get('/:username/water/days', waterController.findWaterDays)
router.post('/:username/water/days', waterController.createWaterDays)

module.exports = router
