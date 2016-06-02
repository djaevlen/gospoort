'use strict';
/**********************************************************************
 * Angular Application
 * GoSPOORT
 **********************************************************************/
angular.module('gospoort', [
    // Controllers
    'MainController',
    'TrainerController',
    
    
    // Services
    'TrainerService',

    // Plugins
    

]).config(function() {
    

}).run(function($rootScope){
    
    $rootScope.test = "test";
});