const authenticateCurrentUserByToken = require('../../_helpers/authenticate-current-user-by-token')
const MulterParser = require('../../../services/MulterParser')
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

  const newProperty = await currentUser.createProperty({
    ...propertyParams,
  }, {
    field: permittedParams,
  })

  // if (req.file && req.file.location) {
  //   newProperty.imageOne = req.file.location
  //   await newProperty.save()
  // }
  if (req.files?.['imageOne']?.[0]?.location) {
    newProperty.imageOne = req.files['imageOne'][0].location
  }

  if (req.files?.['imageTwo']?.[0]?.location) {
    newProperty.imageTwo = req.files['imageTwo'][0].location
  }

  if (req.files?.['imageThree']?.[0]?.location) {
    newProperty.imageThree = req.files['imageThree'][0].location
  }

  if (req.files?.['imageFour']?.[0]?.location) {
    newProperty.imageFour = req.files['imageFour'][0].location
  }

  await newProperty.save()
  await newProperty.reload()

  res.render('api/own-properties/show', { property: newProperty, layout: false })
}

module.exports = [
  MulterParser.fields([
    { name: 'imageOne', maxCount: 1 },
    { name: 'imageTwo', maxCount: 1 },
    { name: 'imageThree', maxCount: 1 },
    { name: 'imageFour', maxCount: 1 }
  ]),
  authenticateCurrentUserByToken('json'),
  apiOwnPropertyCreate
]
