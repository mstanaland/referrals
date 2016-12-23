var idtheft = {
  templateUrl: './idtheft.html',
  controller: 'IdtheftController'
};

angular
  .module('common')
  .component('idtheft', idtheft)
  .config(function($stateProvider) {
    $stateProvider
      .state('victim.idtheft', {
        url: '/idtheft',
        component: 'idtheft'
      });
  });
