const { body } = require('express-validator')
const { authenticateCurrentUserByToken, checkValidation } = require('../../_helpers')

const {User, Property, Favourite} = require('../../../models')

const permittedFavouriteParams = ['UserId', 'PropertyID']

const apiFavouriteCreate = async function (req, res) {
  const { locals: { currentUser, currentProperty } } = res
  const { body: favouriteParams} = req
  const newFavourite = await Favourite.create({
    ...favouriteParams
  }, {field: permittedFavouriteParams})

  newFavourite.setUser(currentUser)
  newFavourite.setProperty(currentProperty)

  res.redirect('/favourites')
}

module.exports=[
  authenticateCurrentUserByToken('json'),
  apiFavouriteCreate
]
