Package.describe({
  name: 'fourquet:routes',
  version: '0.0.1',
  summary: 'An extension of kadira:flow-router to work with fourquet:actions',
  git: 'https://github.com/fourquet/meteor-package-routes',
  documentation: 'README.md',
  license: 'LICENSE',
});

const packages = [
  'ecmascript',
  'kadira:flow-router@2.10.0',
  'fourquet:actions@0.0.1',
];

const files = [
  'routes.js',
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages);
  api.imply('fourquet:actions');
  api.addFiles(files);
  api.export('Routes');
});

Package.onTest(function(api) {
  api.use('ecmascript@0.1.6', ['client', 'server']);
  api.use('tinytest', ['client', 'server']);
  api.use(['fourquet:routes', 'fourquet:actions', 'fourquet:reflux-core'], ['client', 'server']);
  api.addFiles('routes-tests.js', ['client', 'server']);
});
