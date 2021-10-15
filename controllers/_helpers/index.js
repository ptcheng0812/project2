module.exports = {
  getUserByToken: require('./get-user-by-token'),
  authenticateCurrentUserByToken: require('./authenticate-current-user-by-token'),
  checkValidation: require('./check-validation'),
  getUserByToken: require('./get-user-by-token'),
  property: {
    getPropertyById: require('./get-property-by-id')
  },
  ownProperty: {
    getCurrentUserPropertyById: require('./gt-current-user-property-by-id')
  },
  favourite:{
    getCurrentUserFavouriteById: require('./get-current-user-favourite-by-id')
  }
}
