Routes = FlowRouter;
Routes.subscriptions.push = function() {
  return;
};
Object.assign(Routes, Actions.ListenerMethods);
