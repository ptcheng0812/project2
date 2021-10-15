const { body } = require('express-validator')
const MulterParser = require('../../../services/MulterParser')
const { authenticateCurrentUserByToken, checkValidation } = require('../../_helpers')
const {Property} = require('../../../models')

const permittedParams = [
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

const apiOwnPropertyCreate = async function (req, res) {
  const { locals: { currentUser } } = res
  const { body: propertyParams } = req
  const newProperty = await Property.create({
    ...propertyParams,
  }, {
      field: permittedParams,
      include: {association: Property.Images}
    })

  newProperty.setUser(currentUser)

  res.render('api/own-property/show', { property: newProperty, layout: false })
}

module.exports = [
  MulterParser.single('imageOne'),
  MulterParser.single('imageTwo'),
  MulterParser.single('imageThree'),
  MulterParser.single('imageFour'),
  authenticateCurrentUserByToken('json'),
  checkValidation,
  apiOwnPropertyCreate
]
