function LandingController($state, store) {

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.landing ) {
    this.radio = store.values.landing;
  }

  this.onSubmit = function() {
    switch(this.radio) {
      case 'nc':
        store.values.landing = 'nc';
        $state.go('nc.prescreen');
        break;
      case 'victim':
        store.values.landing = 'victim';
        $state.go('victim');
        break;
      case 'comms':
        store.values.landing = 'comms';
        $state.go('comms');
        break;
    }
  };
}

angular
  .module('common')
  .controller('LandingController', LandingController);
