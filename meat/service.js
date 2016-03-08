(function() {
    'use strict';
    
    angular
        .module('meat')
        .service('MeatService', MeatService);
    
    MeatService.$inject = ['API','$http'];
    
    function MeatService(API,$http) {
        this.findAll = function() {
            return $http.get(API.url + 'meats');
        }
        this.create = function(meat) {
            return $http.post(API.url + 'meats', meat);
        }
        this.update = function(meat) {
            return $http.put(API.url + 'meats/' + meat._id, meat);
        }
        this.remove = function(id) {
            return $http.delete(API.url + 'meats/' + id);
        }
    }
})();