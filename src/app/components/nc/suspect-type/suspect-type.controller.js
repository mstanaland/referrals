function SuspectTypeController($state, store) {
  store.setProgressBar(0.15);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.suspectType ) {
    this.radio = store.values.suspectType;
  }

  this.back = function() {
    $state.go('nc.whistleblower');
  };

  this.onSubmit = function() {
    switch(this.radio) {
      case 'individual':
        store.values.suspectType = 'individual';
        $state.go('nc.indContact');
        break;
      case 'business':
        store.values.suspectType = 'business';
        $state.go('XX');
        break;
      case 'exempt':
        store.values.suspectType = 'exempt';
        $state.go('XX');
        break;
      case 'gov':
        store.values.suspectType = 'gov';
        $state.go('XX');
        break;
    }
  };
}

angular
  .module('common')
  .controller('SuspectTypeController', SuspectTypeController);
