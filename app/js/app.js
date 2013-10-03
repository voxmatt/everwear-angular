'use strict';

/* App Module */

angular.module('everwear', ['everwearFilters', 'everwearServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/jeans', {templateUrl: 'partials/jean-list.html',   controller: JeanListCtrl}).
      when('/jeans/:jeanId', {templateUrl: 'partials/jean-detail.html', controller: JeanDetailCtrl}).
      otherwise({redirectTo: '/jeans'});
}]);
