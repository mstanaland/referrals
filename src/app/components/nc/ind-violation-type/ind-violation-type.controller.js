function indViolationTypeController($state, store) {
  store.setProgressBar(0.3);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.violationType ) {
    this.radio = store.values.violationType;
  }

  this.back = function() {
    $state.go('nc.indBusiness');
  };

  this.onSubmit = function() {
    switch(this.radio) {
      case 'noFile':
        store.values.violationType = 'noFile';
        $state.go('nc.XX');
        break;
      case 'incorrectIncome':
        store.values.violationType = 'incorrectIncome';
        $state.go('XX');
        break;
      case 'falseExemptions':
        store.values.violationType = 'falseExemptions';
        $state.go('XX');
        break;
      case 'alteredDocs':
        store.values.violationType = 'alteredDocs';
        $state.go('XX');
        break;
      case 'illegalIncome':
        store.values.violationType = 'illegalIncome';
        $state.go('XX');
        break;
      case 'terrorist':
        store.values.violationType = 'terrorist';
        $state.go('XX');
        break;
      case 'other':
        store.values.violationType = 'other';
        $state.go('XX');
        break;
    }
  };
}

angular
  .module('common')
  .controller('indViolationTypeController', indViolationTypeController);
