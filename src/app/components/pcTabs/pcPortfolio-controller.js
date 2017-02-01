(function() {
  'use strict';

  angular
    .module('pcousineau')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController($log,PortfolioService,$mdDialog) {
    var vm=this;
    vm.slides=PortfolioService.getSlides();

    vm.showSlide = function(ev,slide) {
      $log.log(angular.toJson(slide));
      $mdDialog.show({
          controller: DialogController,
          templateUrl: 'app/components/pcTabs/pcSlide.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          locals: {
            slide: slide
          }
        });
    };
  }

  function DialogController($scope, $mdDialog,slide) {

    $scope.slide=slide;
  }

})();
