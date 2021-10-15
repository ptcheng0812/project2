const { body } = require('express-validator')
const MulterParser = require('../../../services/MulterParser')
const { authenticateCurrentUserByToken, checkValidation, ownProperty: {getCurrentUserPropertyById} } = require('../../_helpers')
const {Property, Image} = require('../../../models')

const permittedChangeParams = [
  'type',
  'name',
  'address',
  'price',
  'year',
  'area',
  'roomNumber',
  'description',
  'imageOne',
  'imageTwo',
  'imageThree',
  'imageFour'
]

const apiOwnPropertyUpdate = async function (req, res) {
  const { body: propertyParams } = req
  const { locals: { currentProperty } } = res

  await currentProperty.update(propertyParams, {field: permittedChangeParams})

  await currentProperty.reload()

  res.render('api/own-property/show', {property: currentProperty, layout: false})
}

module.exports=[
  MulterParser.single('imageOne'),
  MulterParser.single('imageTwo'),
  MulterParser.single('imageThree'),
  MulterParser.single('imageFour'),
  authenticateCurrentUserByToken('json'),
  getCurrentUserPropertyById,
  apiOwnPropertyUpdate
]
