const authenticateCurrentUserByToken = require('../../_helpers/authenticate-current-user-by-token')
const getCurrentUserPropertyById = require('../../_helpers/gt-current-user-property-by-id')
const { Property } = require('../../../models')

const apiOwnPropertyShow = async function (req, res) {
  const { params: {id} } = req

  const property = await Property.findOne({
    where: { id: Number(id) || 0 },
  })

  res.render('api/own-properties/show', {property, layout: false})
}

module.exports =[
  // authenticateCurrentUserByToken('json'),
  // getCurrentUserPropertyById,
  apiOwnPropertyShow
]
