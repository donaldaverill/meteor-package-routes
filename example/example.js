Actions.Main = Actions.createActions([
  'goToHome',
  'goToAnotherPage',
]);

Routes.route('/', {
  name: 'home',
  action() {
    Actions.Main.goToHome();
  },
});
Routes.route('/anotherPage', {
  name: 'anotherPage',
  action() {
    Actions.Main.goToAnotherPage();
  },
});

if (Meteor.isClient) {
  Routes.listenTo(Actions.Main.goToHome, () => {
    BlazeLayout.render('layout', {
      main: 'home'
    });
  });

  Routes.listenTo(Actions.Main.goToAnotherPage, () => {
    BlazeLayout.render('layout', {
      main: 'anotherPage'
    });
  });
}
