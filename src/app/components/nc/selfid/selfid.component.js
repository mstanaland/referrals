var selfId = {
  templateUrl: './selfid.html',
  controller: 'SelfIdController'
};

angular
  .module('common')
  .component('selfId', selfId)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.selfId', {
        url: '/selfId',
        component: 'selfId'
      });
  });
