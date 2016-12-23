function commonService () {
 this.progress = 0;

  this.setProgressBar = function(value) {
    var width = document.querySelectorAll('.ref-progressbar')[0].clientWidth;
    var newWidth = width * value;
    document.getElementById('progressbar').setAttribute('style', 'width:' + newWidth +'px');
  };
}

angular
 .module('common')
 .service('commonService', commonService);