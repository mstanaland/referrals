function WhistleblowerController($state, store) {
  store.setProgressBar(0.1);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.nc.whistleblower ) {
    this.radio = store.values.nc.whistleblower;
  }

  this.back = function() {
    $state.go('nc.prescreen');
  };

  this.onSubmit = function() {
    switch(this.radio) {
      case 'yes':
        store.values.nc.whistleblower = 'yes';
        // $state.go('whistleblower');
        break;
      case 'no':
        store.values.nc.whistleblower = 'no';
        $state.go('nc.suspectType');
        break;
    }
  };
}

angular
  .module('common')
  .controller('WhistleblowerController', WhistleblowerController);
