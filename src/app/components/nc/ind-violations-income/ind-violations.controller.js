function IndViolationsIncomeController($state, store) {
  store.setProgressBar(0.35);

  this.back = function() {
    $state.go('nc.indViolationType');
  };

  if ( store.values.violations && store.values.violations[store.currentViolation].violation ) {
    this.radio = store.values.violations[store.currentViolation].violation;
  }

  this.onSubmit = function() {
    switch(this.radio) {
      case 'usedCash':
        store.values.violations[store.currentViolation].violation = 'usedCash';
        $state.go('xxx');
        break;
      case 'AcceptedGoods':
        store.values.violations[store.currentViolation].violation = 'AcceptedGoods';
        $state.go('xxx');
        break;
      case 'gambling':
        store.values.violations[store.currentViolation].violation = 'gambling';
        $state.go('xxx');
        break;
      case 'falseIncome':
        store.values.violations[store.currentViolation].violation = 'falseIncome';
        $state.go('xxx');
        break;
    }
  };


}

angular
  .module('common')
  .controller('IndViolationsIncomeController', IndViolationsIncomeController);
