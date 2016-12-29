var evidence = {
  templateUrl: './evidence.html',
  controller: 'EvidenceController'
};

angular
  .module('common')
  .component('evidence', evidence)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.evidence', {
        url: '/evidence',
        component: 'evidence'
      });
  });
