const MulterParser = require('../../../services/MulterParser')
const authenticateCurrentUserByToken = require('../../_helpers/authenticate-current-user-by-token')
const getCurrentUserPropertyById = require('../../_helpers/gt-current-user-property-by-id')

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

  if (req.files?.['imageOne']?.[0]?.location) {
    currentProperty.imageOne = req.files['imageOne'][0].location
  }

  if (req.files?.['imageTwo']?.[0]?.location) {
    currentProperty.imageTwo = req.files['imageTwo'][0].location
  }

  if (req.files?.['imageThree']?.[0]?.location) {
    currentProperty.imageThree = req.files['imageThree'][0].location
  }

  if (req.files?.['imageFour']?.[0]?.location) {
    currentProperty.imageFour = req.files['imageFour'][0].location
  }

  await currentProperty.save()
  await currentProperty.reload()

  res.render('api/own-properties/show', {property: currentProperty, layout: false})
}

module.exports=[
  MulterParser.fields([
    { name: 'imageOne', maxCount: 1 },
    { name: 'imageTwo', maxCount: 1 },
    { name: 'imageThree', maxCount: 1 },
    { name: 'imageFour', maxCount: 1 }
  ]),
  authenticateCurrentUserByToken('json'),
  getCurrentUserPropertyById('json'),
  apiOwnPropertyUpdate
]
