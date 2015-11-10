demoApp.controller('CarListController', function ($scope, carFactory) {
    
    $scope.cars = carFactory.getCars();
});