(function() {
  'use strict';

  angular
    .module('pcousineau')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $log) {
    var vm = this;

    vm.menuOpen = false;

    vm.options = {
      chart: {
        type: 'discreteBarChart',
        height: 400,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    };

    vm.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : 5
          } ,
          {
            "label" : "B" ,
            "value" : 10
          } ,
          {
            "label" : "C" ,
            "value" : 15
          } ,
          {
            "label" : "D" ,
            "value" : 20
          } ,
          {
            "label" : "E" ,
            "value" : 25
          }
        ]
      }
    ];

  }
})();
