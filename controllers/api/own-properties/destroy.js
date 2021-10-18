const authenticateCurrentUserByToken = require('../../_helpers/authenticate-current-user-by-token')
const getCurrentUserPropertyById = require('../../_helpers/gt-current-user-property-by-id')

const apiOwnPropertyDestroy = async function (req, res) {
  const {locals: {currentProperty}} = res

  await currentProperty.destroy()

  res.status(204).json()
}

module.exports= [
  authenticateCurrentUserByToken('json'),
  getCurrentUserPropertyById('json'),
  apiOwnPropertyDestroy
]
