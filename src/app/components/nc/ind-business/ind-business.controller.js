function IndBusinessController($state, store) {
  store.setProgressBar(0.25);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.hasBiz ) {
    this.radio = store.values.hasBiz;
    this.bizName = store.values.bizName;
    this.bizStreetAddress = store.values.bizStreetAddress;
    this.bizStreetAddressUnit = store.values.bizStreetAddressUnit;
    this.bizCity = store.values.bizCity;
    this.bizState = store.values.bizState;
    this.bizZip = store.values.bizZip;
    this.bizTin = store.values.bizTin;
    this.bizPhone = store.values.bizPhone;
    this.bizEmail = store.values.bizEmail;
    this.bizUrl = store.values.bizUrl;
  }


  this.back = function() {
    $state.go('nc.indContact');
  };

  this.onSubmit = function() {
    store.values.hasBiz = this.radio;
    store.values.bizName = this.bizName;
    store.values.bizStreetAddress = this.bizStreetAddress;
    store.values.bizStreetAddressUnit = this.bizStreetAddressUnit;
    store.values.bizCity = this.bizCity;
    store.values.bizState = this.bizState;
    store.values.bizZip = this.bizZip;
    store.values.bizTin = this.bizTin;
    store.values.bizPhone = this.bizPhone;
    store.values.bizEmail = this.bizEmail;
    store.values.bizUrl = this.bizUrl;
    console.log(store.values);
  };
}

angular
  .module('common')
  .controller('IndBusinessController', IndBusinessController);
