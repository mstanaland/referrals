function EvidenceController($state, store) {
  store.setProgressBar(0.45);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.violations && store.values.violations[store.currentViolation].evidence ) {
    this.radio = store.values.violations[store.currentViolation].evidence;
  }

  this.back = function() {
    $state.go('nc.indViolationsIncomeDetails');
  };

  this.onSubmit = function() {
    if (!store.values.violations) {
      store.values.violations = [{}];
    }

    switch(this.radio) {
      case 'yes':
        store.values.violations[store.currentViolation].evidence = 'yes';
        break;
      case 'no':
        store.values.violations[store.currentViolation].evidence = 'no';
        break;
    }
    $state.go('nc.selfId');
  };
}

angular
  .module('common')
  .controller('EvidenceController', EvidenceController);
