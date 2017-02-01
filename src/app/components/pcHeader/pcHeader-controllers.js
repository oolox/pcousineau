(function() {
  'use strict';

  angular
    .module('pcousineau')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController($scope, $log, $mdDialog, $window) {

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

      var confirm = $mdDialog.alert()
        .title('Email')
        .textContent('oolotronic@hotmail.com')
        .ariaLabel('oolotronic@hotmail.com')
        .targetEvent(ev)
        .ok('Close');

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
        $log.log("Linkedin");
        $window.open("https://www.linkedin.com/in/paul-cousineau-b3319461/", "_blank")

      }, function() {
        $log.log("CANCEL");

      });
    };

    vm.selectGitHub=function(ev) {
      var confirm = $mdDialog.confirm()
        .title('Linked In')
        .textContent('This will open Github in a new tab.')
        .ariaLabel('Pauls github')
        .targetEvent(ev)
        .ok('Open Github')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function() {
        $log.log("Github");
        $window.open("https://github.com/oolox/pcousineau", "_blank")

      }, function() {
        $log.log("CANCEL");

      });
    };

    vm.selectResume=function(ev) {
      var confirm = $mdDialog.confirm()
        .title('Resume')
        .textContent("This will open Paul's resume in a new tab.")
        .ariaLabel('Pauls resume')
        .targetEvent(ev)
        .ok('View')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function() {
        $log.log("OPEN");
        $window.open("assets/pcousineauResume.pdf", "_blank")

      }, function() {
        $log.log("CANCEL");

      });
    };

  }

})();
