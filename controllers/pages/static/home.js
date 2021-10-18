const {User, Property} = require('../../../models')

const pagesStaticHome = function(req, res) {
  const property =  Property.findAll()
  res.render('pages/static/home', {property})
}

module.exports = [pagesStaticHome]
