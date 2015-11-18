'use strict';

/**
 * @ngdoc function
 * @name swipeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swipeApp
 */
angular.module('swipeApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.count = 0;
  	$scope.onPanleft = function onHammer (event) {
  		console.log(event.type);
    	$scope.eventType = event.type;
    	$scope.count--;
    };
    $scope.onPanright = function onHammer (event) {
  		console.log(event.type);
    	$scope.eventType = event.type;
    	$scope.count++;
    };
    $scope.onTap = function onHammer (event) {
  		console.log(event.type);
    	$scope.eventType = event.type;
    };
  });
