function ncPrescreenController($state, store) {
  store.setProgressBar(0.05);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.nc.prescreen ) {
    this.radio = store.values.nc.prescreen;
  }

  this.back = function() {
    $state.go('landing');
  };

  this.onSubmit = function() {
    switch(this.radio) {
      case 'taxprep':
        store.values.nc.prescreen = 'taxprep';
        $state.go('taxprep');
        break;
      case 'refund':
        store.values.nc.prescreen = 'refund';
        $state.go('refund');
        break;
      case 'spouse':
        store.values.nc.prescreen = 'spouse';
        $state.go('spouse');
        break;
      case 'none':
        store.values.nc.prescreen = 'none';
        $state.go('nc.whistleblower');
        break;
    }
  };
}

angular
  .module('common')
  .controller('ncPrescreenController', ncPrescreenController);
