const { Op } = require("sequelize")
const {User, Property} = require('../../../models')
const gtCurrentUserPropertyById = require('../../_helpers/gt-current-user-property-by-id')

const pageOwnPropertiesIndex = async function (req, res) {
  const { query } = req
  const q = query.q || ''
  const page = Number(query.page) || 1
  const limit = 10
  const offset = (page - 1) * limit

  const { locals: { currentUser } } = res
  const { params: { id } } = req

  const results = await Property.findAndCountAll({
    where: {
      name: {
        [Op.iLike]: `%${q}%`
      },
      UserId: currentUser.id
    },
    include: {
      association: User.Properties
    },
    order: [['createdAt', 'ASC']],
    limit,
    offset
  })
  res.render('pages/own-property/index', {
    property: results.rows,
    filters: { q, page, limit, offset, totalPages: Math.ceil(results.count / limit) }
  })


  // const property = await Property.findAll({
  //   where: {
  //     UserId: currentUser.id
  //   },
  //   include: {
  //     association: User.Properties
  //   }
  // })
  // res.render('pages/own-property/index', {property})
}

module.exports = [pageOwnPropertiesIndex]
