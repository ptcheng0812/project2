const { authenticateCurrentUserByToken } = require('../../_helpers')
const{Property} = require('../../../models')

const apiOwnPropertyNew = async function (req, res) {
  const property = await Property.build()

  res.render('api/own-properties/new', { property, layout: false })
}

module.exports = [
  authenticateCurrentUserByToken('html'),
  apiOwnPropertyNew
]
