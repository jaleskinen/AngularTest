demoApp.factory('carFactory', function () {
    
    var allcars = [{model: 'Audi', price: 2000},
                   {model: 'Ford', price: 3000},
                   {model: 'Trabant', price: 200},
                   {model: 'Vauxhall', price: 350},
                   {model: 'Ferrari', price: 4500},
                   {model: 'Toyota', price: 30}];

    var factory = {};
    
    factory.getCars = function () {
        return allcars;
    };
    
    factory.addNewCar = function (newCar) {
        allcars.push(newCar);
    };
    
    return factory;
});