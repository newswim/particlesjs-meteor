// created by Vincent Garreau <vin.garreau@gmail.com>

Package.describe({
  name: 'newswim:particles',
  version: '2.0.1',
  summary: 'Create & generate interactive particles.',
  git: 'https://github.com/newswim/particlesjs-meteor.git',
  documentation: 'https://github.com/newswim/particlesjs-meteor/blob/master/README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('particles.js','client');
  api.addAssets('particles-demo.json', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('newswim:particlesjs');
  api.addFiles('particles-tests.js');
});
