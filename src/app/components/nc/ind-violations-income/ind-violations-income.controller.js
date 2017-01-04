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
      case 'Used cash to avoid reporting income':
        store.values.violations[store.currentViolation].violation = this.radio;
        $state.go('nc.indViolationsIncomeDetails');
        break;
      case 'Accepted goods or services for payment to avoid reporting income':
        store.values.violations[store.currentViolation].violation = this.radio;
        $state.go('nc.indViolationsIncomeDetails');
        break;
      case 'Did not report gambling income':
        store.values.violations[store.currentViolation].violation = this.radio;
        $state.go('nc.indViolationsIncomeDetails');
        break;
      case 'Reported incorrect/false income':
        store.values.violations[store.currentViolation].violation = this.radio;
        $state.go('nc.indViolationsIncomeDetails');
        break;
    }
  };


}

angular
  .module('common')
  .controller('IndViolationsIncomeController', IndViolationsIncomeController);
