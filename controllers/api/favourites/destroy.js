const {authenticateCurrentUserByToken, favourite: {getCurrentUserFavouriteById}} = require('../../_helpers')
const {Favourite} = require('../../../models')

const apiFavouriteDestroy = async function (req, res) {
  const { locals: { currentUser } } = res
  await Favourite.destroy({
    where: {
        UserId: currentUser.id
      }
  })

  res.status(204).json()
}

module.exports=[
  authenticateCurrentUserByToken('json'),
  getCurrentUserFavouriteById,
  apiFavouriteDestroy
]
