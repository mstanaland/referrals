var done = {
  templateUrl: './done.html',
  controller: 'DoneController'
};

angular
  .module('common')
  .component('done', done)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.done', {
        url: '/done',
        component: 'done'
      });
  });
