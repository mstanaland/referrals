function VictimTypeController($state) {
  this.back = function() {
    $state.go('landing');
  };

  this.onSubmit = function() {
    switch(this.radio) {
      case 'taxprep':
        $state.go('taxprep');
        break;

    }
  };
}

angular
  .module('victim')
  .controller('VictimTypeController', VictimTypeController);
