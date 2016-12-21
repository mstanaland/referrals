function WhistleblowerController($state) {
  this.back = function() {
    $state.go('nc.prescreen');
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
  .module('nc')
  .controller('WhistleblowerController', WhistleblowerController);
