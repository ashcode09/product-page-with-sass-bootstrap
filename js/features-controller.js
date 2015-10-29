productPage.controller('featuresController', ['$scope', '$http', function($scope, $http) {
	$scope.features;

	$http.get('data/features.json').success(function(data) {
		$scope.features = data;
	});
}]);