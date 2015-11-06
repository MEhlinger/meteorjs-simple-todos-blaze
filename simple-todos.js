if (Meteor.isClient) {
  Template.body.helpers({
    tasks : [
    {text : "test1"},
    {text : "test2"},
    {text : "test3"}]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
