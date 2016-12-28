var indViolationsNofile = {
  templateUrl: './ind-violations-nofile.html',
  controller: 'IndViolationsNofileController'
};

angular
  .module('common')
  .component('indViolationsNofile', indViolationsNofile)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.indViolationsNofile', {
        url: '/individual/nofile-violations',
        component: 'indViolationsNofile'
      });
  });
