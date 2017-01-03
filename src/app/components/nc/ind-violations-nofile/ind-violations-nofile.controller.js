function IndViolationsNofileController($state, store) {
  store.setProgressBar(0.35);

  this.back = function() {
    $state.go('nc.indViolationType');
  };

  if ( store.values.violations && store.values.violations[store.currentViolation].violation ) {
    this.radio = store.values.violations[store.currentViolation].violation;
  }

  this.onSubmit = function() {
    switch(this.radio) {
      case 'noFile':
        store.values.violations[store.currentViolation].violation = 'Did not file a tax return';
        $state.go('nc.indViolationsIncomeDetails');
        break;
      case 'noPay':
        store.values.violations[store.currentViolation].violation = 'Did not pay taxes that were owed';
        $state.go('nc.indViolationsIncomeDetails');
        break;
    }
  };


}

angular
  .module('common')
  .controller('IndViolationsNofileController', IndViolationsNofileController);
