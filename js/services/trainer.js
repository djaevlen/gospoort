'use strict';
angular.module('TrainerService', [])
.factory("TrainerService", function($http) {

    return {
        get: function() {
            return $http.get('/data/trainers.json');
        }
    };
});