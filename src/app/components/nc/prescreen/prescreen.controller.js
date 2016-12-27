function ncPrescreenController($state, store) {
  store.setProgressBar(0.05);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.prescreen ) {
    this.radio = store.values.prescreen;
  }

  this.back = function() {
    $state.go('landing');
  };

  this.onSubmit = function() {
    switch(this.radio) {
      case 'taxprep':
        store.values.prescreen = 'taxprep';
        $state.go('taxprep');
        break;
      case 'refund':
        store.values.prescreen = 'refund';
        $state.go('refund');
        break;
      case 'spouse':
        store.values.prescreen = 'spouse';
        $state.go('spouse');
        break;
      case 'none':
        store.values.prescreen = 'none';
        $state.go('nc.whistleblower');
        break;
    }
  };
}

angular
  .module('common')
  .controller('ncPrescreenController', ncPrescreenController);
