var nc = {
  templateUrl: './nc.html',
  controller: 'ncController'
};

angular
  .module('common')
  .component('nc', nc)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc', {
        url: '/nc',
        component: 'nc',
        redirectTo: 'nc.prescreen'
      });
  });
