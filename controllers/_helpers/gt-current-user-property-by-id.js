const {Property, Image} = require('../../models')

module.exports = function (format) {
  return async function (req, res, next) {
    const { locals: { currentUser } } = res
    const { params: { id } } = req
    const property = await Property.findOne({
      where: {
        id: Number(id) || 0,
        UserId: currentUser.id
      }
    })

    if (!property) {
      if (format === 'html') {
        return res.render('api/own-properties/not-found', { layout: false })
      }

      if (format === 'json') {
        return res.status(404).json({ message: 'Property Not Found' })
      }
    }

    res.locals.currentProperty = property

    next()
  }
}
