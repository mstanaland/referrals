function DebugController($state, store) {
  this.showDev = false;
  this.values = store.values;
  this.scenario = 'noFile';
  this.jumpLocation = 'landing';

  var acceptedGoods = {
    landing: 'nc',
    prescreen: 'none',
    whistleblower: 'no',
    suspectType: 'individual',
    firstName: 'Mary Lou',
    lastName: 'Sudberry',
    streetAddress: '3426 Ivanhoe Lane',
    streetAddressUnit: '#4',
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
    bizName: 'Hair Styles and More',
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
        violation: 'Accepted goods or services for payment to avoid reporting income',
        whatGoods: 'Airplane tickets, massages and free bowling passes',
        whoProvidedGoods: 'Joe Smith, the CEO of Acme travel',
        freqProvidedGoods: '4-5 times a year',
        howFoundOut: 'I saw it happen',
        otherFacts: null,
        evidence: 'no'
      },
      {
        violationType: 'noFile',
        violation: 'Did not file a tax return',
        description: 'Mary Lou told me she hasn\'t done her taxes in years and she thinks she gets away with it because she believes the IRS thinks she\'s dead.' ,
        howFoundOut: 'She told me last Wednesday at the bowling alley',
        otherFacts: null,
        evidence: 'no'
      }
    ],
    selfId: 'yes',
    selfIdContact: {
      firstName: 'John',
      lastName: 'Smith',
      streetAddress: '4821 12th NW',
      streetAddressUnit: '#331',
      city: 'Washington',
      state: 'DC',
      zip: '22201',
      phone: '202-991-2555',
      bestTimeToCall: 'after 4pm'
    }
  };

  var noFile = {
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
    bizName: 'Hair Styles and More',
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
        violation: 'Did not file a tax return',
        description: 'Mary Lou told me she hasn\'t done her taxes in years and she thinks she gets away with it because she believes the IRS thinks she\'s dead.' ,
        howFoundOut: 'She told me last Wednesday at the bowling alley',
        otherFacts: null,
        evidence: 'no'
      }
    ],
    selfId: 'no',
    selfIdContact: {
    }
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
