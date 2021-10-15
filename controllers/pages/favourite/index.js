const {User, Property, Favourite} = require('../../../models')
const gtCurrentUserPropertyById = require('../../_helpers/gt-current-user-property-by-id')

const pageFavouriteIndex = async function (req, res) {
  const { locals: { currentUser } } = res
  const property = await Property.findAll()
  const user = await User.findAll()
  const favourites = await Favourite.findAll(
    {where: {UserId: currentUser.id}}
  )


  res.render('pages/favourite/index', {property, user, favourites})
}

module.exports = [pageFavouriteIndex]
