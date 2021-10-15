const {User, Property} = require('../../../models')

const pageUsersIndex = async function (req, res) {
  const property = await Property.findAll()
  res.render('pages/user/index', {property})
}

module.exports = [pageUsersIndex]
