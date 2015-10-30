productPage.controller('licenceController', ['$scope', function($scope) {
	$scope.arrayBasket = [];
	$scope.hashBasket = {'smallBusinessPremium': 0, 'midsizeBusiness': 0};


	$scope.addLicencesToBasket = function(idOfQuantInputBox, whichLicence) {
		var licenceQuantity = parseInt($(idOfQuantInputBox).val());
		$scope.hashBasket[whichLicence] = licenceQuantity;
	};
}]);