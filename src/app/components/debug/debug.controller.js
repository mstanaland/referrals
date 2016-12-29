function DebugController($state, store) {
  this.showDev = false;
  this.values = store.values;
  // this.scenario = 'maryLouSudberry';
  // this.jumpLocation = 'landing';

  var acceptedGoods = {
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
    dob: '60',
    email: null,
    occupation: 'hair dresser',
    maritalStatus: 'married',
    spouseName: 'Pete Sudberry',
    relationship: 'relative',
    isDangerous: 'no',
    hasBiz: 'yes',
    bizName: 'Mary Lou Hair Styles and More',
    bizStreetAddress: '318 S 14th St.',
    bizStreetAddressUnit: 'Ste. B',
    bizCity: 'Abilene',
    bizState: 'TX',
    bizZip: '76905',
    bizPhone: '915-322-2311',
    bizEmail: null,
    bizUrl: 'www.marylouhair.com',
    violations: [
      {
        violationType: 'incorrectIncome',
        violation: 'acceptedGoods',
        whatGoods: 'Airplane tickets, massages and free bowling passes',
        whoProvidedGoods: 'Joe Smith, the CEO of Acme travel',
        freqProvidedGoods: '4-5 times a year',
        howFoundOut: 'I saw it happen',
        otherFacts: null,
        evidence: 'no'
      }
    ],
  };

  var noFile = {
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
    dob: '60',
    email: null,
    occupation: 'hair dresser',
    maritalStatus: 'married',
    spouseName: 'Pete Sudberry',
    relationship: 'relative',
    isDangerous: 'no',
    hasBiz: 'yes',
    bizName: 'Mary Lou Hair Styles and More',
    bizStreetAddress: '318 S 14th St.',
    bizStreetAddressUnit: 'Ste. B',
    bizCity: 'Abilene',
    bizState: 'TX',
    bizZip: '76905',
    bizPhone: '915-322-2311',
    bizEmail: null,
    bizUrl: 'www.marylouhair.com',
    violations: [
      {
        violationType: 'noFile',
        violation: 'noFile',
        description: 'Mary Lou told me she hasn\'t done her taxes in years and she thinks she gets away with it because she believes the IRS thinks she\'s dead.' ,
        howFoundOut: 'She told me last Wednesday at the bowling alley',
        otherFacts: null,
        evidence: 'no'
      }
    ],
  };

  this.fillData = function(scenario) {
    switch(scenario) {
      case 'acceptedGoods':
        store.values = acceptedGoods;
        break;
      case 'noFile':
        store.values = noFile;
        break;
    }

    $state.reload($state.current.name);
    this.values = store.values;
  };

  this.jumpTo = function(location) {
    $state.go(location);
  };
}

angular
  .module('common')
  .controller('DebugController', DebugController);
