var indViolationsIncome = {
  templateUrl: './ind-violations-income.html',
  controller: 'IndViolationsIncomeController'
};

angular
  .module('common')
  .component('indViolationsIncome', indViolationsIncome)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.indViolationsIncome', {
        url: '/individual/income-violations',
        component: 'indViolationsIncome'
      });
  });
