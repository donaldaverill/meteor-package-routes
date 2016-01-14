if (Meteor.isServer) {
  Tinytest.add('Routes - defined on server', (test) => {
    test.notEqual(Routes, undefined, 'Expected ' +
      'Routes to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('Routes - defined on client', (test) => {
    test.notEqual(Routes, undefined, 'Expected ' +
      'Routes to be defined on the client.');
  });
}
