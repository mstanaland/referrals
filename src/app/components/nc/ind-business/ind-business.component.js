var indBusiness = {
  templateUrl: './ind-business.html',
  controller: 'IndBusinessController'
};

angular
  .module('common')
  .component('indBusiness', indBusiness)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.indBusiness', {
        url: '/individual/business',
        component: 'indBusiness'
      });
  });
