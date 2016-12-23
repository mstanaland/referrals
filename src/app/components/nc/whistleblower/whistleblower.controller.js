function WhistleblowerController($state, commonService) {
  commonService.setProgressBar(0.1);

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
  .module('common')
  .controller('WhistleblowerController', WhistleblowerController);
