var indViolationType = {
  templateUrl: './ind-violation-type.html',
  controller: 'indViolationTypeController'
};

angular
  .module('common')
  .component('indViolationType', indViolationType)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.indViolationType', {
        url: '/individual/violation-type',
        component: 'indViolationType'
      });
  });
