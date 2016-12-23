var landing = {
  templateUrl: './landing.html',
  controller: 'LandingController'
};

angular
  .module('common')
  .component('landing', landing)
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        component: 'landing'
      });
    $urlRouterProvider.otherwise('/');
  });
