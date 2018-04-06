//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        
        .when('/',{
            templateUrl     : 'views/home.html',
        })
        .when('/books',{
            templateUrl     : 'views/mainView.html',
            controller      : 'mainController',
            controllerAs    : 'main'
        })
        .when('/character',{
            templateUrl     : 'views/characView.html', 
            controller      : 'characController',
            controllerAs    : 'char'
        })
        .when('/:name}}',{
            templateUrl     : 'views/detailView.html', 
            controller      : 'characController',
            controllerAs    : 'char'
        })
        .when('/houses',{
            templateUrl     : 'views/houseView.html', 
            controller      : 'houseController',
            controllerAs    : 'house'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);