const { body } = require('express-validator')
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
  'description'
]

const apiOwnPropertyUpdate = async function (req, res) {
  const {body: {propertyParams}} = req
  const { locals: { currentProperty } } = res

  await currentProperty.update(propertyParams, {field: permittedChangeParams})

  res.render('api/own-property/show', {property: currentProperty, layout: false})

}

module.exports=[
  authenticateCurrentUserByToken('json'),
  checkValidation,
  getCurrentUserPropertyById,
  apiOwnPropertyUpdate]
