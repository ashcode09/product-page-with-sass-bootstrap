$(window).scroll(function() {
	if ($(window).width() < 767) {
		var heightOfNavBar = $('#navbar').height();
		var heightOfShoppingBasket = $('#shoppingBasket').height();
		var bottomOfShoppingBasket = heightOfShoppingBasket + heightOfNavBar;
		if ($(window).scrollTop() >= bottomOfShoppingBasket) {
    	$('#basket-update-notn').removeClass('fix-to-navbar-bottom-small-screen fix-to-navbar-bottom');
		};
		if ($(window).scrollTop() < bottomOfShoppingBasket) {
			toggleClasses('#basket-update-notn', 'fix-to-navbar-bottom', 'fix-to-navbar-bottom-small-screen');
		};
	} else {
		var topOfShoppingBasket = $('#shoppingBasket').offset()['top'];
		var heightOfShoppingBasket = $('#navbar').height();
		var bottomOfShoppingBasket = topOfShoppingBasket + heightOfShoppingBasket;
		if ($(window).scrollTop() >= bottomOfShoppingBasket) {
    	$('#basket-update-notn').removeClass('fix-to-navbar-bottom-small-screen fix-to-navbar-bottom');
		};
		if ($(window).scrollTop() < bottomOfShoppingBasket) {
			toggleClasses('#basket-update-notn', 'fix-to-navbar-bottom-small-screen', 'fix-to-navbar-bottom');
		};
	};
});

function toggleClasses(idOfElementToStick, classToRemove, classToAdd) {
	$(idOfElementToStick).removeClass(classToRemove);
	$(idOfElementToStick).addClass(classToAdd);
}