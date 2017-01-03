function DoneController($state, store) {
  store.setProgressBar(1);
}

angular
  .module('common')
  .controller('DoneController', DoneController);
