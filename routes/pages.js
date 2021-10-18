const { Router } = require('express')
const router = Router()

router.get('/', require('../controllers/pages/static/home'))
router.get('/properties', require('../controllers/pages/properties/index'))
router.get('/ownproperties', require('../controllers/pages/own-properties/index'))
router.get('/favourites', require('../controllers/pages/favourites/index'))

router.get('/users', require('../controllers/pages/user/index'))

module.exports = router
