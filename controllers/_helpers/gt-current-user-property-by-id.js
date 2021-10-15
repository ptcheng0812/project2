const {Property, Image} = require('../../models')

module.exports = async function (req, res, next) {
  const { locals: { currentUser } } = res
  const { params: { id } } = req
  const property = await Property.findOne({
    where: {
      id: Number(id) || 0,
      UserId: currentUser.id
    },
    include: {
      association: Property.Images
    },
    order: [['Images', 'createdAt', 'DESC']]
  })


  // if (!wishlist) {
  //   if (format === 'modal') {
  //     return res.render('api/my-wishlist/not-found', { layout: false })
  //   }

  //   if (format === 'json') {
  //     return res.status(404).json({ message: `Wishlist of ID ${id} not found!` })
  //   }
  // }

  res.locals.currentProperty = property

  next()
}
