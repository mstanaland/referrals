function SelfIdController($state, store) {
  store.setProgressBar(0.5);

  if (store.values.selfId) {
    this.radio = store.values.selfId;
    this.firstName = store.values.selfIdContact.firstName || null;
    this.lastName = store.values.selfIdContact.lastName || null;
    this.streetAddress = store.values.selfIdContact.streetAddress || null;
    this.streetAddressUnit = store.values.selfIdContact.streetAddressUnit || null;
    this.city = store.values.selfIdContact.city || null;
    this.state = store.values.selfIdContact.state || null;
    this.zip = store.values.selfIdContact.zip || null;
    this.phone = store.values.selfIdContact.phone || null;
    this.bestTimeToCall = store.values.selfIdContact.bestTimeToCall || null;
  }

  this.onSubmit = function() {
    store.values.selfId = this.radio;

    store.values.selfIdContact = {
      firstName: this.firstName,
      lastName: this.lastName,
      streetAddress: this.streetAddress,
      streetAddressUnit: this.streetAddressUnit,
      city: this.city,
      state: this.state,
      zip: this.zip,
      phone: this.phone,
      bestTimeToCall: this.bestTimeToCall
    };

    $state.go('nc.review');
  };
}

angular
  .module('common')
  .controller('SelfIdController', SelfIdController);
