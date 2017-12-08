angular.module('cxm',[])
	.controller('HelloController', HelloController);

function HelloController($scope) {
  $scope.greeting = { text: 'Hello' };
}



