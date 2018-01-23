/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages')
      .controller('usecaseTwoPageCtrl', usecaseTwoPageCtrl);
  
    /** @ngInject */
    function usecaseTwoPageCtrl($scope, $timeout, baConfig, dataService) {   
  
      $scope.stackedBarData = {
        labels: ['Door 1', 'Door 2', 'Door 3', 'Door 4'],
        series: [
          [200, 400, 500, 300],
          [100, 200, 400, 600]
        ]
      };
  
      $scope.stackedBarOptions = {
        fullWidth: true,
        height: "300px",
        stackBars: true,
        axisY: {
          labelInterpolationFnc: function (value) {
            return (value);
          }
        }
      };      
  
    //   function getResponsive(padding, offset){
    //     return [
    //       ['screen and (min-width: 1550px)', {
    //         chartPadding: padding,
    //         labelOffset: offset,
    //         labelDirection: 'explode',
    //         labelInterpolationFnc: function (value) {
    //           return value;
    //         }
    //       }],
    //       ['screen and (max-width: 1200px)', {
    //         chartPadding: padding,
    //         labelOffset: offset,
    //         labelDirection: 'explode',
    //         labelInterpolationFnc: function (value) {
    //           return value;
    //         }
    //       }],
    //       ['screen and (max-width: 600px)', {
    //         chartPadding: 0,
    //         labelOffset: 0,
    //         labelInterpolationFnc: function (value) {
    //           return value[0];
    //         }
    //       }]
    //     ];
    //   }
  
      $timeout(function(){
        new Chartist.Bar('#stacked-bar', $scope.stackedBarData, $scope.stackedBarOptions);
      });
    }
  })();