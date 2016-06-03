'use strict';
/**********************************************************************
 * Trainer Controller
 **********************************************************************/
angular.module('TrainerController', [])

.controller('TrainerController', function ($scope, $http, TrainerService, $uibModal) {


	// Varibles ================================================================
  	$scope.title = "Trainers";
  	$scope.trainers = [];
  	$scope.filtered = [];
  	$scope.selectionDisciplines = [];
  	$scope.selectionLocations = [];

  	$scope.disciplines = [
  		'Crossfit',
  		'Yoga',
  		'Fitness',
  		'Power',
  		'Core Strength',
  		'Bodybuilding',
  		'Balance',
  		'Core'
  	];

  	$scope.locations = [
  		'Outdoor',
  		'Indoor'
  	];

  	// Get all trainers ========================================================
  	$scope.getTrainers = function(){
  		TrainerService.get().success(function(data){
  			$scope.trainers = data;
  		});
  	};
  	$scope.getTrainers();
  	
  	// Disciplines =============================================================
  	$scope.toggleDisciplines = function (discipline) {
    	var idx = $scope.selectionDisciplines.indexOf(discipline);
    	if (idx > -1) {
      		$scope.selectionDisciplines.splice(idx, 1);
    	}
    	else {
      		$scope.selectionDisciplines.push(discipline);
    	}
  	};

  	$scope.filterDisciplines = function(a) {
  		if($scope.selectionDisciplines.length !== 0) {
  			for(item in $scope.selectionDisciplines){
  			    var t = $scope.selectionDisciplines[item];
  			    if(a.discipline.indexOf(t) > -1){
  			        return true;   
  			    }               
  			}
  		} else {
  			return true;
  		} 
    };

    // Locations ===============================================================
  	$scope.toggleLocations = function (location) {
    	var idx = $scope.selectionLocations.indexOf(location);
    	if (idx > -1) {
      		$scope.selectionLocations.splice(idx, 1);
    	}
    	else {
      		$scope.selectionLocations.push(location);
    	}
  	};

  	$scope.filterLocations = function(a) {
  		if($scope.selectionLocations.length !== 0) {
  			for(item in $scope.selectionLocations){
  			    var t = $scope.selectionLocations[item];
  			    if(a.location.indexOf(t) > -1){
  			        return true;   
  			    }               
  			}
  		} else {
  			return true;
  		} 
    };


    // View detail about trainer modal =========================================
    $scope.viewDetail = function(trainer) {
    	var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: '/views/modals/viewTrainerModal.html',
			controller: 'TrainerModalController',
			size: 'md',
			resolve: {
				trainer: function () {
					return trainer;
				}
			}
		});

		modalInstance.result.then(function () {
				
		}, function () {
				
		});
	
    };
    
}).controller('TrainerModalController', function ($scope, $uibModalInstance, trainer) {

	$scope.trainer = trainer;

	$scope.ok = function () {
    	$uibModalInstance.close();
  	};

  	$scope.cancel = function () {
    	$uibModalInstance.dismiss('cancel');
  	};

});