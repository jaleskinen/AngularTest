var myDirectives = angular.module('MyDirectives', []);

myDirectives.directive('myFirstDirective', function () {
    
    return {
        
        restrict: 'A', //Restricted this direcive to be used only as an attribute
        /*template: '<p><b>Moro</b></p>',*/
        templateUrl: '../scripts/partials/directives.html'
    };
});
