productPage.controller('licenceAndBasketController', ['$scope', function($scope) {
	var maxItemQuantity = 10;
	var minItemQuantity = 1;

	$scope.arrayBasket = [];
	$scope.basket = {};
	$scope.basketShown = false;
	$scope.basketUpdated = false;

	$scope.addOneLicence = function(id) {
		var currentValue = parseInt($(id).val());
	  if (currentValue < maxItemQuantity) {
	    var newValue = currentValue + 1;
	    $(id).val(newValue);
	  };
	};

	$scope.minusOneLicence = function(id) {
		var currentValue = parseInt($(id).val());
	  if (currentValue > minItemQuantity) {
	    var newValue = currentValue - 1;
	    $(id).val(newValue);
	  };
	};

	$scope.addLicencesToBasket = function(idOfQuantInputBox, whichLicence) {
		var licenceQuantity = parseInt($(idOfQuantInputBox).val());
		$scope.basket[whichLicence] = licenceQuantity;
		$scope.basketUpdateNotificiationOn();
	};

	$scope.showBasket = function() {
		if ($scope.basketShown == false) {
			$scope.basketShown = true;
			$scope.basketUpdateNotificiationOff();
		} else {
			$scope.basketShown = false;
		}
	};

	$scope.isBasketEmpty = function() {
		return $.isEmptyObject($scope.basket);
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

	$scope.basketUpdateNotificiationOn = function() {
		$scope.basketUpdated = true;
	};

	$scope.basketUpdateNotificiationOff = function() {
		$scope.basketUpdated = false;
	};
}]);