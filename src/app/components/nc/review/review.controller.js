function ReviewController($state, store) {
  store.setProgressBar(0.5);
  this.values = store.values;
  this.indMoreText = 'View details';
  this.bizMoreText = 'View details';

  this.indToggle = function() {
    this.indMore = !this.indMore;
    this.indMoreText = this.indMore ? 'Hide details' : 'View details';
  };

  this.bizToggle = function() {
    this.bizMore = !this.bizMore;
    this.bizMoreText = this.bizMore ? 'Hide details' : 'View details';
  };

  this.back = function() {
    console.log('back');
    $state.go('nc.selfId');
  };


  if (store.values.streetAddressUnit) {
    this.address = store.values.streetAddress + ' ' + store.values.streetAddressUnit;
  } else {
    this.address = store.values.streetAddress;
  }
  if (store.values.bizStreetAddressUnit) {
    this.bizAddress = store.values.bizStreetAddress + ' ' + store.values.bizStreetAddressUnit;
  } else {
    this.bizAddress = store.values.bizStreetAddress;
  }

}

angular
  .module('common')
  .controller('ReviewController', ReviewController);
