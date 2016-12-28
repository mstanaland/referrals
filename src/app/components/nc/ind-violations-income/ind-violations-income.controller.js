function IndViolationsIncomeController($state, store) {
  store.setProgressBar(0.35);

  this.back = function() {
    $state.go('nc.indViolationType');
  };

  if ( store.values.violations && store.values.violations[store.currentViolation].violation ) {
    this.radio = store.values.violations[store.currentViolation].violation;
  } else {
    store.values.violations = [{}];
  }

  this.onSubmit = function() {
    switch(this.radio) {
      case 'usedCash':
        store.values.violations[store.currentViolation].violation = 'usedCash';
        $state.go('nc.indViolationsIncomeDetails');
        break;
      case 'acceptedGoods':
        store.values.violations[store.currentViolation].violation = 'acceptedGoods';
        $state.go('nc.indViolationsIncomeDetails');
        break;
      case 'gambling':
        store.values.violations[store.currentViolation].violation = 'gambling';
        $state.go('nc.indViolationsIncomeDetails');
        break;
      case 'falseIncome':
        store.values.violations[store.currentViolation].violation = 'falseIncome';
        $state.go('nc.indViolationsIncomeDetails');
        break;
    }
  };


}

angular
  .module('common')
  .controller('IndViolationsIncomeController', IndViolationsIncomeController);
