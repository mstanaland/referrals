function LandingController($state) {
  this.onSubmit = function() {
    switch(this.radio) {
      case 'nc':
        $state.go('nc.prescreen');
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
  .module('common')
  .controller('LandingController', LandingController);
