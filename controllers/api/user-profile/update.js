const {authenticateCurrentUserByToken} = require('../../_helpers')
const MulterParser = require('../../../services/MulterParser')

const permittedAvatarParams = ['avatar', 'introduction']

const apiUserProfileAvatarUpdate = async function (req, res) {
  const {locals: {currentUser}} = res

    const newInfo = { ...req.body }

  if (req.file && req.file.location) {
    newInfo.avatar = req.file.location
  }

  await currentUser.update(newInfo, {field: permittedAvatarParams})

  res.status(204).json()
}

module.exports=[
  MulterParser.single('avatar'),
  authenticateCurrentUserByToken('json'),
  apiUserProfileAvatarUpdate
]
