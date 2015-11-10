productPage.controller('videoPlaybackController', ['$scope', function($scope) {
	$scope.views = {
		helpView: true,
		showView: false,
		adviceView: false,
		infoView: false,
		chooseView: false,
	};

	$scope.changeView = function(viewToSee) {
		for (var view in $scope.views) {
			if (view == viewToSee) {
				$scope.views[view] = true;
			} else {
				$scope.views[view] = false;
			};
		};
	};
}]);