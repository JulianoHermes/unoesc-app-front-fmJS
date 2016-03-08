(function() {
    'use strict';
    
    angular
        .module('meat')
        .controller('MeatController', MeatController);
    
    MeatController.$inject = ['MeatService','BreweryService'];
    
    function MeatController(MeatService,BreweryService) {
        var vm = this;
        vm.empty = {};
        
        vm.findAll = function() {
            MeatService.findAll().then(function(response) {
                vm.meats = response.data;
            },function(error) {
                console.error(error);
            });
        }
        vm.findAll();
        
        vm.findAllBreweries = function() {
            BreweryService.findAll().then(function(response) {
                vm.breweries = response.data;
            },function(error) {
                console.error(error);
            });
        }
        vm.findAllBreweries();
        
        vm.reset = function() {
            vm.meat = angular.copy(vm.empty);
        }
        vm.populate = function(meat) {
            vm.meat = angular.copy(meat);
        }
        vm.save = function(meat) {
            if (meat._id) {
                MeatService.update(meat).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                },function(error) {
                    console.log(error);
                    vm.error = error.data;
                });
            } else {
                MeatService.create(meat).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                    vm.reset();
                }, function(error) {
                    console.error(error);
                    vm.error = error.data;
                });
            }
        }
        vm.remove = function(meat) {
            if (confirm('Tem certeza que gostaria de remover a cervejaria ' + meat.name + '?')) {
                MeatService.remove(meat._id).then(function(response) {
                    vm.success = response.data;
                    vm.findAll();
                }, function(error) {
                    console.error(error);
                    vm.error = error.data;
                });
            }
        }
    }
})();