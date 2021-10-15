const { Router } = require('express')
const router = Router()

// AUTH
router.post('/auth/signup', require('../controllers/api/auth/signup'))
router.post('/auth/login', require('../controllers/api/auth/login'))
router.delete('/auth/logout', require('../controllers/api/auth/logout'))

//Own Property
router.post('/ownproperty', require('../controllers/api/own-property/create'))
router.get('/ownproperty/new', require('../controllers/api/own-property/new'))
router.get('/ownproperty/:id/edit', require('../controllers/api/own-property/edit'))
router.get('/ownproperty/:id', require('../controllers/api/own-property/show'))
router.put('/ownproperty/:id', require('../controllers/api/own-property/update'))
router.delete('/ownproperty/:id', require('../controllers/api/own-property/destroy'))

//Favourite
router.post('/favourite', require('../controllers/api/favourite/create'))
router.delete('/favourite/:id', require('../controllers/api/favourite/destroy'))

module.exports = router
