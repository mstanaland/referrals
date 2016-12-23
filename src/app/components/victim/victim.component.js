var victim = {
  templateUrl: './victim.html',
  // controller: 'VictimController'
};

angular
  .module('common')
  .component('victim', victim)
  .config(function($stateProvider) {
    $stateProvider
      .state('victim', {
        url: '/victim',
        component: 'victim',
        redirectTo: 'victim.type'
      });
  });
