(function() {
    'use strict';
    
    angular
        .module('meat')
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when('/meats', {
                templateUrl: 'meat/meat.html',
                controller: 'MeatController',
                controllerAs: 'vm'
            });
    }
})();