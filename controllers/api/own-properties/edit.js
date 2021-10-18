const authenticateCurrentUserByToken = require('../../_helpers/authenticate-current-user-by-token')
const getCurrentUserPropertyById = require('../../_helpers/gt-current-user-property-by-id')

const apiOwnPropertyEdit = async function (req, res) {
  const { locals: { currentProperty }} = res

  res.render('api/own-properties/edit', { property: currentProperty, layout: false })
}

module.exports =[
  authenticateCurrentUserByToken('html'),
  getCurrentUserPropertyById('html'),
  apiOwnPropertyEdit
]
