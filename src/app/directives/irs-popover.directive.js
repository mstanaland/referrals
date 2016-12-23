'use strict';

angular.module('common')
  .directive('irsPopover', ['$timeout','$compile','$document',function($timeout, $compile, $document) {
    return {
      replace: true,
      transclude: true,
      restrict: 'EA',
      scope: {
        header: '@',
        content: '@'
      },
      template: `
        <a tabindex="0"
            aria-haspopup="true"
            data-toggle="popover"
            data-trigger="focus"
            title="{{title}}"
            data-content="{{content}}"
            class="ref-popover-link">
          <ng-transclude></ng-transclude>
        </a>
      `,
      link: function(scope, element) {
          var output = $compile('<div class="popover" role="tooltip" aria-live="assertive" aria-labelledby="popover-title" aria-describedby="popover-content"><span class="sr-only">Start of message.</span><div class="arrow"></div><h3 id="popover-title" class="popover-title"></h3><irs-icon class="js-close-pop times-icon" name="times-icon"></irs-icon><div id="popover-content" class="popover-content" aria-live="assertive"></div><span class="sr-only">End of message. Tab to continue.</span></div>')(scope);

          $timeout(function () {
              $(element).popover({
                  placement: 'bottom',
                  title: scope.header,
                  template: output
              }).on('shown.bs.popover', function () {
                  // Safari mobile fix
                  // see: https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile
                  $('body').css('cursor', 'pointer');
              }).on('hide.bs.popover', function () {
                  $('body').removeAttr('style');
              });
          }, 0);


      }
    };
  }]);
