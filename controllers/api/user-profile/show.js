const {User} = require('../../../models')

const apiUserProfileShow = async function (req, res) {
  const { locals: { currentUser } } = res
  const { params: {id}} =req
  const user = await User.findOne({
    where:{id: Number(id) || 0},
  })

  res.render('api/user-profile/show', {user, layout: false})
}

module.exports=[
  apiUserProfileShow
]
