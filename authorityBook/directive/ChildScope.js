var childScope = angular.module('ChildScopeDemo',[]);

childScope.controller('ParentController',function($scope){
	$scope.someBareValue = 'hello computer';
	$scope.parentAction = function(){
		$scope.someBareValue = 'hello human,from parent';
	}
});

childScope.controller('ChildController',function($scope){
	$scope.childAction = function(){
		$scope.someBareValue = 'hello human,from child';
	}
});

childScope.controller('ParentController2',function($scope){
	$scope.parentModel = {
		value: 'hello computer'
	};
	$scope.parentAction = function(){
		$scope.parentModel.value = 'hello human,from parent';
	}
});

childScope.controller('ChildController2',function($scope){
	$scope.childAction = function(){
		$scope.parentModel.value = 'hello human,from child';
	}
});