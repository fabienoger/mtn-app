import {Meteor} from 'meteor/meteor'

Meteor.publish('informations', () => {
  return Informations.find({active: true});
});
