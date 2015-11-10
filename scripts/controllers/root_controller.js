demoApp.controller('RootController', function ($scope, carFactory) {
   
    $scope.addCar = function () {
        carFactory.addNewCar({model: $scope.carModel, price: $scope.carPrice});
    };
});