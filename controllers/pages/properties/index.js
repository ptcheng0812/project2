const { Op } = require("sequelize")
const authenticateCurrentUserByToken = require("../../_helpers")
const {User, Property} = require('../../../models')

const pagePropertiesIndex = async function (req, res) {
  const {locals: {currentUser}} = res
  const { query } = req

  const q = query.q || ''
  const page = Number(query.page) || 1
  const limit = 10
  const offset = (page - 1) * limit

  const results = await Property.findAndCountAll({
    where: {
      name: {
        [Op.iLike]: `%${q}%`
      }
    },
    order: [['createdAt', 'ASC']],
    limit,
    offset
  })

  res.render('pages/properties/index', {
    property: results.rows,
    filters: { q, page, limit, offset, totalPages: Math.ceil(results.count / limit) }
  })
}

module.exports = [pagePropertiesIndex]
