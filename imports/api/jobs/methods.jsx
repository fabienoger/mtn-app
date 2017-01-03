import {Meteor} from 'meteor/meteor';

Meteor.methods({
  getJobs: (keyword, city, filters) => {
    if (!keyword || !city || !filters) {
      throw new Meteor.Error("missing-params", "Params 'keyword' or 'city' are missing.");
    }
    return HTTP.call("GET", "http://52.214.31.30/v1/get_data", {
      headers: {
        "Content-Type": "application/json",
        "From": "Tester",
        "User-Agent": "Test agent 0.1"
      },
      data: {keyword, city, filters}
    });
  }
});
