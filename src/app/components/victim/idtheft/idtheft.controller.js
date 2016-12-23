function IdtheftController($state) {
  this.back = function() {
    $state.go('victim');
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
  .controller('IdtheftController', IdtheftController);
