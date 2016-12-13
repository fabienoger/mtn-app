import {Meteor} from 'meteor/meteor'
import Formations from './collection.jsx'

Meteor.methods({
  searchFormation: search => {
    if (!search|| !search.age || !search.levelOfEducation || !search.languages) {
      throw new Meteor.Error("fields-required", "All fields are required !");
    }
    const searchDoc = {
      //niveau: {$regex: search.levelOfProgramming, $options : 'i'},
      //metier: search.job,
      niveau_diplome: search.levelOfEducation,
      age: search.age
    };
    if (search.where != 'none') {
      searchDoc.$where = `/^${search.where}.*/.test(this.post_code)`;
    }
    if (search.languages.length < 2 && search.languages[0] != 'Pas de programmation web') {
      searchDoc.languages = _.map(searchDoc.languages, l => {
        return l.toUpperCase();
      });
      searchDoc.languages = {$in: search.languages};
    }
    console.info("searchDoc ", searchDoc);
    return Formations.find(searchDoc).fetch();
  }
});
