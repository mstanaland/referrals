function IndContactController($state, store) {
  store.setProgressBar(0.2);

  // Check if form was previously submited, if so set radio to checked
  if ( store.values.firstName ) {
    this.firstName = store.values.firstName;
    this.lastName = store.values.lastName;
    this.streetAddress = store.values.streetAddress;
    this.streetAddressUnit = store.values.streetAddressUnit;
    this.city = store.values.city;
    this.state = store.values.state;
    this.zip = store.values.zip;
    this.ssn = store.values.ssn;
    this.dob = store.values.dob;
    this.email = store.values.email;
    this.occupation = store.values.occupation;
    this.maritalStatus = store.values.maritalStatus;
    this.spouseName = store.values.spouseName;
    this.relationship = store.values.relationship;
    this.radio = store.values.isDangerous;
  }


  this.back = function() {
    $state.go('nc.suspectType');
  };

  this.onSubmit = function() {
    store.values.firstName = this.firstName;
    store.values.lastName = this.lastName;
    store.values.streetAddress = this.streetAddress;
    store.values.streetAddressUnit = this.streetAddressUnit;
    store.values.city = this.city;
    store.values.state = this.state;
    store.values.zip = this.zip;
    store.values.ssn = this.ssn;
    store.values.dob = this.dob;
    store.values.email = this.email;
    store.values.occupation = this.occupation;
    store.values.maritalStatus = this.maritalStatus;
    store.values.spouseName = this.spouseName;
    store.values.relationship = this.relationship;
    store.values.isDangerous = this.radio;
    $state.go('nc.indBusiness');
  };
}

angular
  .module('common')
  .controller('IndContactController', IndContactController);
