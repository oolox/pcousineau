(function() {
  'use strict';

  angular
    .module('pcousineau')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);



  }

})();
