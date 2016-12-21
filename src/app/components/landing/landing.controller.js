function LandingController($state) {
  this.onSubmit = function() {
    switch(this.radio) {
      case 'nc':
        $state.go('nc');
        break;
      case 'victim':
        $state.go('victim');
        break;
      case 'comms':
        $state.go('comms');
        break;
    }
  };
}

angular
  .module('landing')
  .controller('LandingController', LandingController);
