productPage.controller('licenceController', ['$scope', function($scope) {
	$scope.arrayBasket = [];
	$scope.basket = {};
	$scope.basketShown = false;


	$scope.addLicencesToBasket = function(idOfQuantInputBox, whichLicence) {
		var licenceQuantity = parseInt($(idOfQuantInputBox).val());
		$scope.basket[whichLicence] = licenceQuantity;
	};

	$scope.showBasket = function() {
		if ($scope.basketShown == false) {
			$scope.basketShown = true;
		} else {
			$scope.basketShown = false;
		}
	};
}]);