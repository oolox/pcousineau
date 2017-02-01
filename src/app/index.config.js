(function() {
  'use strict';

  angular
    .module('pcousineau')
    .config(config);

  /** @ngInject */
  function config($logProvider,$mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('red');

  }

})();
