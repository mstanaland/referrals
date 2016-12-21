var nc = {
  templateUrl: './nc.html',
  controller: 'ncController'
};

angular
  .module('nc')
  .component('nc', nc)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc', {
        url: '/nc',
        component: 'nc',
        redirectTo: 'nc.prescreen'
      });
  });
