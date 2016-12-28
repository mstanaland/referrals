function indViolationTypeController($state, store) {
  store.setProgressBar(0.3);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.violations ) {
    this.radio = store.values.violations[store.currentViolation].violationType;
  } else {
    store.values.violations = [{}];
  }

  this.back = function() {
    $state.go('nc.indBusiness');
  };

  this.onSubmit = function() {
    switch(this.radio) {
      case 'noFile':
        store.values.violations[store.currentViolation].violationType = 'noFile';
        $state.go('nc.indViolationsNofile');
        break;
      case 'incorrectIncome':
        store.values.violations[store.currentViolation].violationType = 'incorrectIncome';
        $state.go('nc.indViolationsIncome');
        break;
      case 'falseExemptions':
        store.values.violations[store.currentViolation].violationType = 'falseExemptions';
        $state.go('XX');
        break;
      case 'alteredDocs':
        store.values.violations[store.currentViolation].violationType = 'alteredDocs';
        $state.go('XX');
        break;
      case 'illegalIncome':
        store.values.violations[store.currentViolation].violationType = 'illegalIncome';
        $state.go('XX');
        break;
      case 'terrorist':
        store.values.violations[store.currentViolation].violationType = 'terrorist';
        $state.go('XX');
        break;
      case 'other':
        store.values.violations[store.currentViolation].violationType = 'other';
        $state.go('XX');
        break;
    }
  };
}

angular
  .module('common')
  .controller('indViolationTypeController', indViolationTypeController);
