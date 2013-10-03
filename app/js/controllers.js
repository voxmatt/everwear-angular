'use strict';

/* Controllers */

function JeanListCtrl($scope, Jean) {
  $scope.jeans = Jean.query();
  $scope.orderProp = 'brand';
  $scope.listNav = true;
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function JeanDetailCtrl($scope, $routeParams, Jean) {
  $scope.jean = Jean.get({jeanId: $routeParams.jeanId}, function(jean) {
    $scope.mainImageUrl = jean.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
