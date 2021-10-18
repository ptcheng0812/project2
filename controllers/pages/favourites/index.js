const { Property, Favourite} = require('../../../models')
const authenticateCurrentUserByToken = require('../../_helpers/authenticate-current-user-by-token')

const pageFavouriteIndex = async function (req, res) {
  const { locals: { currentUser } } = res

  const favourites = await Favourite.findAll({
      where: {
        UserId: currentUser.id
      }
  })

  res.render('pages/favourites/index', { favourites })
}

module.exports = [
  authenticateCurrentUserByToken('html'),
  pageFavouriteIndex
]
