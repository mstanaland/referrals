function ncPrescreenController($state) {
  this.back = function() {
    $state.go('landing');
  };

  this.onSubmit = function() {
    switch(this.radio) {
      case 'taxprep':
        $state.go('taxprep');
        break;
      case 'refund':
        $state.go('refund');
        break;
      case 'spouse':
        $state.go('spouse');
        break;
      case 'none':
        $state.go('nc.whistleblower');
        break;
    }
  };
}

angular
  .module('nc')
  .controller('ncPrescreenController', ncPrescreenController);
