var indViolationsIncomeDetails = {
  templateUrl: './ind-violations-income-details.html',
  controller: 'IndViolationsIncomeDetailsController'
};

angular
  .module('common')
  .component('indViolationsIncomeDetails', indViolationsIncomeDetails)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.indViolationsIncomeDetails', {
        url: '/individual/income-violation/details',
        component: 'indViolationsIncomeDetails'
      });
  });
