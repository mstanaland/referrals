var idtheft = {
  templateUrl: './idtheft.html',
  controller: 'IdtheftController'
};

angular
  .module('victim')
  .component('idtheft', idtheft)
  .config(function($stateProvider) {
    $stateProvider
      .state('victim.idtheft', {
        url: '/idtheft',
        component: 'idtheft'
      });
  });
