var prescreen = {
  templateUrl: './prescreen.html',
  controller: 'ncPrescreenController'
};

angular
  .module('nc')
  .component('prescreen', prescreen)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.prescreen', {
        url: '/prescreen',
        component: 'prescreen'
      });
  });
