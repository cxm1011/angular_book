// angular.module("scopeDemo",[])
// 	.run(function($rootScope){
// 		$rootScope.name = "world";
// 	});

var app = angular.module("scopeDemo",[]);

app.controller('HelloCtrl',function($rootScope,$scope){
	$rootScope.name = "world";
	$scope.name2 = 'world2';
})	
	
