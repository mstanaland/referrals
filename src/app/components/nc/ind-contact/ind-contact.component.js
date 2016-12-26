var indContact = {
  templateUrl: './ind-contact.html',
  controller: 'IndContactController'
};

angular
  .module('common')
  .component('indContact', indContact)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.indContact', {
        url: '/individual/contact',
        component: 'indContact'
      });
  });
