(function() {
  'use strict';

  angular
    .module('pcousineau')
    .factory('PortfolioService', PortfolioService);

  /** @ngInject */
  function PortfolioService($log, $http) {
    var assets="assets/images/";
    var slides=[
      { "file":"a1-1.png","name":"Agilone Files Tree and List", "year":"2015-2017" },
      { "file":"a1-2.png","name":"Agilone Campaign Segmentation", "year":"2015-2017" },
      { "file":"a1-3.png","name":"Agilone Webcontainer Design", "year":"2015-2017" },
      { "file":"a1-4.png","name":"Agilone Rules to SQL Conversion", "year":"2015-2017" },
      { "file":"bv0.jpg","name":"Badgeville Game Design Wizard", "year":"2014-2015" },
      { "file":"bv1.jpg","name":"Badgeville Query Selector", "year":"2014-2015" },
      { "file":"bv2.jpg","name":"Badgeville Graphic Visualization", "year":"2014-2015" },
      { "file":"bv3.jpg","name":"Badgeville Dashboard of Charts", "year":"2014-2015" },
      { "file":"beerlog.png","name":"Ibisys Beer Tap Flow Monitor", "year":"2013-2015" },
      { "file":"simulcare.png","name":"Xanacare Mobile Controlled Medical Device", "year":"2013-2014" },
      { "file":"adrGarage.png","name":"Adrenalin Garage Web Video Overlay Mixer", "year":"2013" },
      { "file":"roomlinx.png","name":"Roomlinx Hospitality Internet TV", "year":"2007-2012" }

    ];

    angular.forEach(slides, function(slide) {
      slide.path=assets+slide.file;
    });

    function getSlides(limit,offset) {
      return slides;
    }

    var service = {
      getSlides: getSlides
    };

    return service;
  }
})();
