const {authenticateCurrentUserByToken, favourite: {getCurrentUserFavouriteById}} = require('../../_helpers')
const {Favourite} = require('../../../models')

const apiFavouriteDestroy = async function (req, res) {
  const {locals: {currentFavourite}} = res
  await currentFavourite.destroy()

  res.status(204).json()
}

module.exports=[
  authenticateCurrentUserByToken('json'),
  getCurrentUserFavouriteById,
  apiFavouriteDestroy
]
