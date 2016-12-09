import {Meteor} from 'meteor/meteor'
import Formations from './collection.jsx'

Meteor.methods({
  searchFormation: search => {
    if (!search|| !search.age || !search.levelOfEducation
      || !search.where || !search.languages || !search.levelOfProgramming) {
      throw new Meteor.Error("fields-required", "All fields are required !");
    }
    const searchDoc = {
      niveau: {$regex: search.levelOfProgramming, $options : 'i'},
      //metier: search.job,
      niveau_diplome: search.levelOfEducation,
      age: search.age,
      $where: `/^${search.where}.*/.test(this.post_code)`,
      languages: {$in: search.languages}
    };
    return Formations.find(searchDoc).fetch();
  }
});
