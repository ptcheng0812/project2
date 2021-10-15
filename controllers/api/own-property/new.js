const { authenticateCurrentUserByToken } = require('../../_helpers')
const MulterParser = require('../../../services/MulterParser')
const{Property, Image} = require('../../../models')

const apiOwnPropertyNew = async function (res, req) {
  const property = await Property.build({
    Images: []
  }, {
      include: Property.Images
  })

  property.Images.push(await Image.build())

  res.render('api/own-property/new', {property, layout: false})
}

module.exports = [
  MulterParser.none(),
  authenticateCurrentUserByToken('json'),
  apiOwnPropertyNew
]
