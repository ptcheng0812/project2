const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/pages/static/get-home'))
router.get('/property', require('../controllers/pages/property/index'))
router.get('/ownproperty', require('../controllers/pages/ownproperty/index'))
router.get('/ownproperty/:id', require('../controllers/pages/ownproperty/show'))
router.put('/ownproperty/:id', require('../controllers/pages/ownproperty/update'))
router.get('/users', require('../controllers/pages/user/index'))
router.get('/favourite', require('../controllers/pages/favourite/index'))

module.exports = router
