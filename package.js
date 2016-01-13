// created by Vincent Garreau <vin.garreau@gmail.com>

Package.describe({
  name: 'newswim:particlejs',
  version: '2.0.1',
  summary: 'Create & generate interactive particles.',
  git: 'https://github.com/newswim/particlesjs-meteor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // including older version
  api.versionsFrom('1.2.0');
  api.addFiles('particles.min.js','client');
  // api.export('pJS', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('newswim:particlejs');
  api.addFiles('particles-tests.js');
});
