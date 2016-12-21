var whistleblower = {
  templateUrl: './whistleblower.html',
  controller: 'WhistleblowerController'
};

angular
  .module('nc')
  .component('whistleblower', whistleblower)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.whistleblower', {
        url: '/whistleblower',
        component: 'whistleblower'
      });
  });
