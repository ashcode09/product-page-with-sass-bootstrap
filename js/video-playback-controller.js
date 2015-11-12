productPage.controller('videoPlaybackController', ['$scope', '$element', function($scope, $element) {
	$scope.views = {
		helpView: true,
		showView: false,
		adviceView: false,
		infoView: false,
		chooseView: false,
	};

	console.log($element)

	$scope.changeView = function(viewToSee) {
		for (var view in $scope.views) {
			if (view == viewToSee) {
				$scope.views[view] = true;
			} else {
				$scope.views[view] = false;
			};
		};
	};



	$('.left-column').on("click", function(element) {
      var tabId = '';
      if (element.toElement.className.indexOf("table-tabs") !== -1) {
        tabId = element.toElement.id;
      } else if (element.toElement.tagName == 'A') {
        tabId = element.toElement.parentElement.id;
      } else {
        tabId = element.toElement.parentElement.parentElement.id;
      }
      var tabIdSearchTerm = '#' + tabId;
      $('.active-tab').removeClass('active-tab');
      $(tabIdSearchTerm).addClass('active-tab');
    })

	$scope.printElement = function(element) {
		console.log(element)
	}




}]);