function ReviewController($scope, $state, store) {
  store.setProgressBar(0.9);
  this.values = store.values;
  this.indMore = false;
  this.bizMore = false;



  this.$postLink = function() {
    // console.log('scope', $scope.$ctrl.contactForm.$valid);
  };

  this.indToggle = function() {
    this.indMore = !this.indMore;
  };

  this.bizToggle = function() {
    this.bizMore = !this.bizMore;
  };

  this.back = function() {
    console.log('back');
    $state.go('nc.selfId');
  };

  this.onSubmit = function() {
    $state.go('nc.done');
  };

  this.updateData = function() {
    store.values = this.values;
    this.contactForm.$setPristine();
    this.bizContactForm.$setPristine();
    this.bizMore = false;
    this.indMore = false;
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
