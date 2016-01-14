# Routes for Meteor [![Build Status](https://travis-ci.org/fourquet/meteor-package-routes.svg?branch=master)](https://travis-ci.org/fourquet/meteor-package-routes)

An extension of [`kadira:flow-router`](https://atmospherejs.com/kadira/flow-router) to work with [`fourquet:actions`](https://atmospherejs.com/fourquet/actions)

### Install

`meteor add fourquet:routes`

*Routes* extends [`kadira:flow-router`](https://atmospherejs.com/kadira/flow-router) and compliments [`fourquet:actions`](https://atmospherejs.com/fourquet/actions)(*Actions*). In order to use *Routes*, [*Reflux*](https://www.npmjs.com/package/reflux-core) needs to be included in the app with a package such as [`fourquet:reflux-core`](https://github.com/fourquet/meteor-package-reflux-core),  [`fourquet:reflux`](https://github.com/fourquet/meteor-package-reflux) or from [NPM](https://www.npmjs.com/package/reflux-core).

#### Documentation
Routes can listen to action and perform actions. First, define actions:
```js
Actions.SomeActions = Actions.create([
  'anAction',
  'anotherAction'
]);
```
Then listen:
```js
Routes.listenTo(Actions.SomeActions.anAction, () => {
  // do something, such as render a page
});
```
When an action is called, *Routes* will call its function.
```js
Actions.SomeActions.anAction();
```
#### Example
See the [repository](https://github.com/fourquet/meteor-package-routes/tree/master/example) for full working example.
```html
<template name="layout">
  <h1>Welcome to the Routes Example!</h1>
  <div><a href="/">Home</a></div>
  <div><a href="/anotherPage">Another Page</a></div>
  {{> Template.dynamic template=main}}
</template>

<template name="home">
  This is home!
</template>

<template name="anotherPage">
  This is anotherPage!
</template>
```
```js
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
```
#### Todo
More tests

#### Version
0.0.1

#### License
MIT
