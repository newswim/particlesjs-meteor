if (Meteor.isClient) {

  Template.body.onRendered(function() {
    let settings = 'pjs-settings.json';
    this.autorun(() => {
      if (particlesJS) {
        console.log(`loading particles.js config from "${settings}"`)
        // window.particlesJS.load = function(tag_id, path_config_json, callback)
        particlesJS.load('particles-js', settings, function() {
          console.log('callback - particles.js config loaded');
        });
      }
    });
  });

  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
