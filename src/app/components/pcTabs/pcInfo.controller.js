(function() {
  'use strict';

  angular
    .module('pcousineau')
    .controller('InfoController', InfoController);

  /** @ngInject */
  function InfoController($window,$log) {
    var vm=this;
    vm.launchLink=function(lnk) {
      $window.open(lnk, "_blank")

    };
  }


})();
