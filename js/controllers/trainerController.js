'use strict';
/**********************************************************************
 * Trainer Controller
 **********************************************************************/
angular.module('TrainerController', [])

.controller('TrainerController', function ($scope, $http, TrainerService) {

  	this.title = "Trainers";

  	this.trainers = [];
  	TrainerService.get().success(function(data){
	console.log(data);
  		this.trainers = data;
  	});
    
});