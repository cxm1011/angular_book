angular.module("application",[])
	.controller('StartUpController',StartUpController)
	.controller('StartUpControllerWatch',StartUpControllerWatch)
	.controller('StartUpControllerButton',StartUpControllerButton)
	.controller('StudentListController',StudentListController)
	.controller('HeaderController',HeaderController)
	.controller('ShoppingController', ShoppingController)
	.factory('Items',shoppingModule);

function StartUpController($scope){
	$scope.funding = {startingEstimate:0};

	$scope.computeNeeded = function(){
		$scope.funding.needed = $scope.funding.startingEstimate *10;
	}

}

function StartUpControllerWatch($scope){
	$scope.funding = {startingEstimate:0};

	computeNeeded = function(){
		$scope.funding.needed = $scope.funding.startingEstimate *10;
	}

	//watch监控表达式，当表达式发生变化时就调用一个回调函数
	$scope.$watch('funding.startingEstimate',computeNeeded);
}


function StartUpControllerButton($scope){
	$scope.computeNeeded = function(){
		$scope.funding.needed = $scope.funding.startingEstimate *10;
	}
}

var students = [{name:'Mary Contrary', id:'1'},
        {name:'Jack Sprat', id:'2'},
        {name:'Jill Hill', id:'3'}];

function StudentListController($scope){
	$scope.students = students;
	$scope.insert = function(){
		$scope.students.splice($scope.students.length,0,{name:'cxm',id:'4'})
	}

	$scope.menuState = true;
	$scope.changeState = function () {
		$scope.menuState = !$scope.menuState;
	}
}


function HeaderController($scope) {
    $scope.isError = false;
    $scope.isWarning = false;

    $scope.showError = function() {
      $scope.messageText = 'This is an error!';
      $scope.isError = true;
      $scope.isWarning = false;
    };

    $scope.showWarning = function() {
      $scope.messageText = 'Just a warning.  Please carry on.';
      $scope.isWarning = true;
      $scope.isError = false;
    };
}

//模块化。通过参数名Items去匹配定义的Items服务
function ShoppingController($scope, Items) {
    $scope.items = Items.query();
}

//将Items定义成一个服务
function shoppingModule(){
	var items = {};
    items.query = function() {
      // In real apps, we'd pull this data from the server...
      return [
        {title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
        {title: 'Polka dots', description: 'Dots with polka', price: 2.95},
        {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
      ];
    };
    return items;
};