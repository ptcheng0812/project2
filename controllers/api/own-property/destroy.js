const { authenticateCurrentUserByToken , ownProperty: { getCurrentUserPropertyById } } = require('../../_helpers')
const {Property, User} = require('../../../models')

const apiOwnPropertyDestroy = async function (req, res) {
  const {locals: {currentProperty}} = res
  await currentProperty.destroy()

  res.status(204).json()
}

module.exports= [authenticateCurrentUserByToken('json'), getCurrentUserPropertyById, apiOwnPropertyDestroy]
