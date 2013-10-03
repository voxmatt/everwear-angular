'use strict';

/* Services */

angular.module('everwearServices', ['ngResource']).
    factory('Jean', function($resource){
  return $resource('jeans/:jeanId.json', {}, {
    query: {method:'GET', params:{jeanId:'jeans'}, isArray:true}
  });
});
