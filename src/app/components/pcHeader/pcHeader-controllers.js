(function() {
  'use strict';

  angular
    .module('pcousineau')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController($scope, $log, $mdDialog) {

    var vm=this;
    vm.isOpen=false;
    vm.testBind="BOUND";

    vm.selectedMode = 'md-fling';
    vm.selectedDirection = 'down';

    vm.openMenu = function($mdOpenMenu, ev) {
      var originatorEv;

      originatorEv = ev;
      $mdOpenMenu(ev);
    };

    vm.selectEmail=function(ev) {

      var confirm = $mdDialog.confirm()
        .title('Email')
        .textContent('oolotronic@hotmail.com')
        .ariaLabel('oolotronic@hotmail.com')
        .targetEvent(ev)
        .ok('Email Now')
        .cancel('Ok');

      $mdDialog.show(confirm).then(function() {
        // IF email now
      }, function() {
        // IF ok
      });

    };


    vm.selectLinkedin=function(ev) {
      var confirm = $mdDialog.confirm()
        .title('Linked In')
        .textContent('This will open Linkedin in a new tab.')
        .ariaLabel('Pauls linkedin')
        .targetEvent(ev)
        .ok('Open Linked In')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function() {
        // IF email now
      }, function() {
        // IF ok
      });
    };

    //$scope.testBind="BOUND";
    $log.log("<HeaderController> "+$scope.testBind);



  }
})();
