$(window).scroll(function() {
	var bottomOfShoppingBasket = $('#navbar').height() + $('#shoppingBasket').height();
	if ($(window).scrollTop() >= bottomOfShoppingBasket) {
		$('#basket-update-notn').addClass('fix-to-top');
	}
	if ($(window).scrollTop() < bottomOfShoppingBasket) {
		$('#basket-update-notn').removeClass('fix-to-top');
	}
});