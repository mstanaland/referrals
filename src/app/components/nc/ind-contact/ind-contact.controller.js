function IndContactController($state, store) {
  store.setProgressBar(0.2);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.nc.indContact ) {
    // this.radio = store.values.nc.suspectType;
  }

  this.back = function() {
    $state.go('nc.suspectType');
  };

  this.onSubmit = function() {
    //on submit goes here
  };
}

angular
  .module('common')
  .controller('IndContactController', IndContactController);
