function DebugController($state, store) {
  this.showDev = false;
  this.scenario = 'maryLouSudberry';
  this.jumpLocation = 'landing';

  var maryLouSudberry = {
    nc: {},
    victim: {},
    comms: {},
    landing: 'nc',
    prescreen: 'none',
    whistleblower: 'no',
    suspectType: 'individual',
    firstName: 'Mary Lou',
    lastName: 'Sudberry',
    streetAddress: '3426 Ivanhoe Lane',
    streetAddressUnit: null,
    city: 'Abilene',
    state: 'TX',
    zip: '76905',
    ssn: null,
    dob: 60,
    email: null,
    occupation: 'hair dresser',
    maritalStatus: 'married',
    spouseName: 'Pete Sudberry',
    relationship: 'relative',
    isDangerous: 'no'
  };

  this.fillData = function(scenario) {
    switch(scenario) {
      case 'maryLouSudberry':
        store.values = maryLouSudberry;
    }

    $state.reload($state.current.name);
  };

  this.jumpTo = function(location) {
    $state.go(location);
  };
}

angular
  .module('common')
  .controller('DebugController', DebugController);
