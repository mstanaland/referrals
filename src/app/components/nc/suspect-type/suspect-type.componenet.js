var suspectType = {
  templateUrl: './suspect-type.html',
  controller: 'SuspectTypeController'
};

angular
  .module('common')
  .component('suspectType', suspectType)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.suspectType', {
        url: '/suspecttype',
        component: 'suspectType'
      });
  });
