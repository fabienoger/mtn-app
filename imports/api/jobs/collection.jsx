Jobs = new Mongo.Collection('jobs')

if (Meteor.isServer) {
  Jobs.allow({
    remove: () => {
      return true
    },
    insert: () => {
      return true
    },
  })
}

export default Jobs
