
// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank
var myApp = angular.module('blogApp', ['ngRoute']);


myApp.controller('mainController',['$http','$scope',function($http,$scope) {

		   $http.get('https://anapioficeandfire.com/api/books?page=1&pageSize=20').success(function(data){
			
			$scope.BooksData= data;
			console.log($scope.BooksData);

		});
}]);

myApp.controller('characController',['$http','$scope',function($http,$scope) {

		   $http.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50').success(function(data1){
			
			$scope.charData= data1;
			console.log($scope.charData);

		});
}]);


myApp.filter('charFilter', function () {
  return function (items) {
    var filtered = [];
    for (var i = 0; i < 50; i++) {
      var item = items[i];
      if (item.name!=""){
        filtered.push(item);
      }
    }
    return filtered;
  };
});


myApp.filter('houseFilter', function () {
  return function (items) {
    var filtered = [];
    for (var i = 0; i < 50; i++) {
      var item = items[i];
      if (item.coatOfArms!=""){
        filtered.push(item);
      }
    }
    return filtered;
  };
});


myApp.controller('houseController',['$http','$scope',function($http,$scope) {

		   $http.get('https://anapioficeandfire.com/api/houses?page=1&pageSize=50').success(function(data2){
			
			$scope.houseData= data2;
			console.log($scope.houseData);

		});
}]);



