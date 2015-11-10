var demoApp = angular.module('demoApp', ['ngRoute', 'ngAnimate', 'MyDirectives']);

//Configure routes
demoApp.config(function ($routeProvider) {
    //When user hits the root route
    $routeProvider.when('/', {
        controller: 'RootController',
        templateUrl: 'view1.html'
    })
        .when('/cars', {
            controller: 'CarListController',
            templateUrl: 'view2.html'
        })
        .otherwise({redirectTo: '/'});
});
