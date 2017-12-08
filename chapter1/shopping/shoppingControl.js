angular.module('myapp',[])
	.controller('CartController',CartController);

function CartController($scope){
	$scope.items = [
	  {title: 'Paint pots', quantity: 8, price: 3.95},
      {title: 'Polka dots', quantity: 17, price: 12.95},
      {title: 'Pebbles', quantity: 5, price: 6.95}
	];

	$scope.remove = function(index){
		$scope.items.splice(index,1); //index删除的位置，1指删除的数量
	}
	
	$scope.total = function(){
		var totalPrice = 0;
		for(var i=0;i<$scope.items.length;i++){
			totalPrice += $scope.items[i].price * $scope.items[i].quantity;
		}
		return totalPrice;
	}
	
	$scope.getDiscount = function(){
		var discount = 0;
		if($scope.total() >100){
			discount = 10;
		}
		return discount;
	}

	$scope.subtotal = function(){
		return $scope.total()-$scope.getDiscount();
	}

	$scope.$watch($scope.total,$scope.getDiscount);
}