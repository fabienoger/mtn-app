import {Meteor} from 'meteor/meteor'
import Formations from './collection.jsx'

Meteor.methods({
  createInformation: (informations) => {
    if (!informations || !informations.name || !informations.age || !informations.levelOfEducation
      || !informations.where || !informations.language || !informations.levelOfProgramming) {
      throw new Meteor.Error("fields-required", "All fields are required !");
    }
    return Formations.insert(informations);
  }
});
