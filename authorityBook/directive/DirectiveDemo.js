var directiveDemojs = angular.module("directiveDemo",[]);

//1.直接赋值
directiveDemojs.directive("gotoGoogle",function(){
	return {
		restrict: 'AE',
		replace: true,
		template: '<a href="https://www.google.com.hk/">click</a>'
					
	};
});


//2.传值

directiveDemojs.directive("gotoGoogle2",function(){
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			someProperty: '@obtainAttr'
		},
		template: '<div>\
					we have access to {{someProperty}}\
					</div>'
					
	};
});

directiveDemojs.directive("gotoGoogle3",function(){
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			myUrl: '@myUrl2',
			clickText: '@clickMe'
		},
		template: '<a href="{{myUrl}}">{{clickText}}</a>'
					
	};
});

directiveDemojs.directive("gotoGoogle4",function(){
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			inputText: '@'
		},
		template: '<div>\
					<input type="text" ng-model="inputText"/>\
					{{inputText}} \
					</div>'
					
	};
});