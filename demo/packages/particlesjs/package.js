// created by Vincent Garreau <vin.garreau@gmail.com>

Package.describe({
  name: 'newswim:particles',
  version: '2.0.0',
  summary: 'Create & generate interactive particles.',
  git: 'https://github.com/newswim/particlesjs-meteor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('particles.js','client');
  api.addAssets('particles-demo.json', 'client');     // demo settings
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('newswim:particles');
  api.addFiles('particles-tests.js');
});
