var innerDirective = angular.module('innerDirectiveDemo',[]);

innerDirective.controller('parentController',function($scope){
	$scope.value = 'hello parent';

	$scope.action = function(){
		$scope.value = 'hello parent from action';
	}
})
innerDirective.controller('childController',function($scope){
	$scope.childAtion = function(){
		$scope.value = 'hello parent from childAtion';
	}
})