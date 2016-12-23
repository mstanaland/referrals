function VictimTypeController($state, store) {
  store.setProgressBar(0.05);

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
  .module('common')
  .controller('VictimTypeController', VictimTypeController);
