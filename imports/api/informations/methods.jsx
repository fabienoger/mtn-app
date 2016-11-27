import {Meteor} from 'meteor/meteor'
import Informations from './collection.jsx'

Meteor.methods({
  createInformation: (informations) => {
    if (!informations|| !informations.age || !informations.levelOfEducation
      || !informations.where || !informations.languages || !informations.levelOfProgramming) {
      throw new Meteor.Error("fields-required", "All fields are required !");
    }
    return Informations.insert(informations);
  }
});
