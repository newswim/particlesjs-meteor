// created by Vincent Garreau <vin.garreau@gmail.com>

Package.describe({
  name: 'newswim:particlesjs',
  version: '2.0.1',
  summary: 'Create & generate interactive particles.',
  git: 'https://github.com/newswim/particlesjs-meteor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('particles.min.js','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('newswim:particlesjs');
  api.addFiles('particles-tests.js');
});
