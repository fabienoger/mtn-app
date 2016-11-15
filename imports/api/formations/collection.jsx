Formations = new Mongo.Collection('formations')

if (Meteor.isServer) {
  Formations.allow({
    remove: () => {
      return true
    },
    insert: () => {
      return true
    },
  })
}

export default Formations
