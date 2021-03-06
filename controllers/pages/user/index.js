const { Op } = require("sequelize")
const {User, Property} = require('../../../models')

const pageUsersIndex = async function (req, res) {
  const { query } = req

  const q = query.q || ''
  const page = Number(query.page) || 1
  const limit = 10
  const offset = (page - 1) * limit

  const results = await User.findAndCountAll({
    where: {
      name: {
        [Op.iLike]: `%${q}%`
      }
    },
    include: User.Properties,
    order: [['createdAt', 'ASC']],
    limit,
    offset
  })

  const properties = results.Properties


  res.render('pages/user/index', {
    users: results.rows,
    properties,
    filters: { q, page, limit, offset, totalPages: Math.ceil(results.count / limit) }
  })
}

module.exports = [pageUsersIndex]
