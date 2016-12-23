function SuspectTypeController($state, store) {
  store.setProgressBar(0.15);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.nc.suspectType ) {
    this.radio = store.values.nc.suspectType;
  }

  this.back = function() {
    $state.go('nc.whistleblower');
  };

  this.onSubmit = function() {
    switch(this.radio) {
      case 'individual':
        store.values.nc.suspectType = 'individual'
        $state.go('XX');
        break;

    }
  };
}

angular
  .module('common')
  .controller('SuspectTypeController', SuspectTypeController);
