var victimType = {
  templateUrl: './victim-type.html',
  controller: 'VictimTypeController'
};

angular
  .module('common')
  .component('victimType', victimType)
  .config(function($stateProvider) {
    $stateProvider
      .state('victim.type', {
        url: '/type',
        component: 'victimType'
      });
  });
