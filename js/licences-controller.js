productPage.controller('licenceController', ['$scope', function($scope) {
	var maxItemQuantity = 10;
	var minItemQuantity = 1;

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
		$scope.isBasketEmpty()
	};

	$scope.isBasketEmpty = function() {
		return $.isEmptyObject($scope.basket)
	};

	$scope.editBasket = function(addOrMinus, whichLicence) {
		if (addOrMinus == 'add' && $scope.basket[whichLicence] < maxItemQuantity) {
			$scope.basket[whichLicence] = $scope.basket[whichLicence] + 1;
		};
		if (addOrMinus == 'minus' && $scope.basket[whichLicence] > minItemQuantity) {
			$scope.basket[whichLicence] = $scope.basket[whichLicence] - 1;
		};
	};

	$scope.deleteItemsFromBasket = function(whichLicence) {
		delete $scope.basket[whichLicence];
	};
}]);