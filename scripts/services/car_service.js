demoApp.service('carService', function (carFactory) {
    
    var allcars = carFactory.getCars();
    
    this.getCars = function () {
        return allcars;
    };
});