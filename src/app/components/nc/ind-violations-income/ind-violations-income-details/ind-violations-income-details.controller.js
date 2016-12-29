function IndViolationsIncomeDetailsController($state, store) {
  store.setProgressBar(0.4);



  this.back = function() {
    $state.go('nc.indViolationsIncome');
  };

  if ( store.values.violations && store.values.violations.length ) {
    // local helper variable for showing fields related to selected violation
    this.violation = store.values.violations[store.currentViolation].violation || null;

    // populate fields if values already present
    this.whatGoods = store.values.violations[store.currentViolation].whatGoods || null;
    this.whoProvidedGoods = store.values.violations[store.currentViolation].whoProvidedGoods || null;
    this.freqProvidedGoods = store.values.violations[store.currentViolation].freqProvidedGoods || null;
    this.howFoundOut = store.values.violations[store.currentViolation].howFoundOut || null;
    this.otherFacts = store.values.violations[store.currentViolation].otherFacts || null;
    this.description = store.values.violations[store.currentViolation].description || null;
  }

  this.onSubmit = function() {
    if (!store.values.violations) {
      store.values.violations = [{}];
    }
    store.values.violations[store.currentViolation].whatGoods = this.whatGoods || null;
    store.values.violations[store.currentViolation].whoProvidedGoods = this.whoProvidedGoods || null;
    store.values.violations[store.currentViolation].freqProvidedGoods = this.freqProvidedGoods || null;
    store.values.violations[store.currentViolation].howFoundOut = this.howFoundOut || null;
    store.values.violations[store.currentViolation].otherFacts = this.otherFacts || null;
    store.values.violations[store.currentViolation].description = this.description || null;

    $state.go('nc.evidence');
  };


}

angular
  .module('common')
  .controller('IndViolationsIncomeDetailsController', IndViolationsIncomeDetailsController);
