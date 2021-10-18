const { Router } = require('express')
const router = Router()

// AUTH
router.post('/auth/signup', require('../controllers/api/auth/signup'))
router.post('/auth/login', require('../controllers/api/auth/login'))
router.delete('/auth/logout', require('../controllers/api/auth/logout'))

//Own Property
router.post('/ownproperties', require('../controllers/api/own-properties/create'))
router.get('/ownproperties/new', require('../controllers/api/own-properties/new'))
router.get('/ownproperties/:id/edit', require('../controllers/api/own-properties/edit'))
router.get('/ownproperties/:id', require('../controllers/api/own-properties/show'))
router.put('/ownproperties/:id', require('../controllers/api/own-properties/update'))
router.delete('/ownproperties/:id', require('../controllers/api/own-properties/destroy'))

//favourites
router.post('/favourites', require('../controllers/api/favourites/create'))
router.delete('/favourites', require('../controllers/api/favourites/destroy'))

//user-profile
router.get('/userprofile/:id', require('../controllers/api/user-profile/show'))
router.put('/userprofile/:id', require('../controllers/api/user-profile/update'))

module.exports = router
