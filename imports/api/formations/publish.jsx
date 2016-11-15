import {Meteor} from 'meteor/meteor'

Meteor.publish('formations', () => {
  return Formations.find({active: true});
});
