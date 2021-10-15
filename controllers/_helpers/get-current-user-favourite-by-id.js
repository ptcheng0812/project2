const {Favourite} = require('../../models')

module.exports= async function (req, res, next) {
  const { locals: { currentUser } } = res
  const { params: { id } } = req

  const favourite = await Favourite.findOne({
    where:{
      id: Number(id) || 0,
      UserId: currentUser.id
    }
  })

  res.locals.currentFavourite = favourite

  next()
}
