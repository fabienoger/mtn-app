Informations = new Mongo.Collection('informations')

if (Meteor.isServer) {
  Informations.allow({
    remove: () => {
      return true
    },
    insert: () => {
      return true
    },
  })
}

export default Informations
