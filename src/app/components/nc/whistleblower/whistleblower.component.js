var whistleblower = {
  templateUrl: './whistleblower.html',
  controller: 'WhistleblowerController'
};

angular
  .module('common')
  .component('whistleblower', whistleblower)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.whistleblower', {
        url: '/whistleblower',
        component: 'whistleblower'
      });
  });
