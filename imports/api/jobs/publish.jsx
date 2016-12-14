import {Meteor} from 'meteor/meteor'

Meteor.publish('jobs', () => {
  return Jobs.find({});
});
