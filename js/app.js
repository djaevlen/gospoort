'use strict';
/**********************************************************************
 * Angular Application
 * GoSPOORT
 **********************************************************************/
angular.module('gospoort', [
    // Controllers
    'TrainerController',
    
    
    // Services
    'TrainerService',


    // Plugins
    'ui.bootstrap'

]).config(function() {
    

}).run(function($rootScope){
    
    $rootScope.test = "test";
});