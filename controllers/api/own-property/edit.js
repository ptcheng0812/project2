const { authenticateCurrentUserByToken , ownProperty: { getCurrentUserPropertyById } } = require('../../_helpers')
const MulterParser = require('../../../services/MulterParser')
const { Property } = require('../../../models')

const apiOwnPropertyEdit = async function (req, res) {
  const { params: {id} } = req

  const property = await Property.findOne({
    where: { id: Number(id) || 0 },
    include: Property.Images
  })

  res.render('api/own-property/edit', {property, layout: false})
}

module.exports =[MulterParser.none(),apiOwnPropertyEdit]
