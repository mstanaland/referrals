var review = {
  templateUrl: './review.html',
  controller: 'ReviewController'
};

angular
  .module('common')
  .component('review', review)
  .config(function($stateProvider) {
    $stateProvider
      .state('nc.review', {
        url: '/review',
        component: 'review'
      });
  });
