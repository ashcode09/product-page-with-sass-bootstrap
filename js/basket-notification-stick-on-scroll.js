$(window).scroll(function() {
  if ($(window).scrollTop() > 85) {
    $('#basket-update-notn').removeClass('basket-ntf-navbar-stick');
    $('#basket-update-notn').addClass('basket-ntf-top-stick');
  };

  if ($(window).scrollTop() < 85) {
    $('#basket-update-notn').removeClass('basket-ntf-top-stick');
    $('#basket-update-notn').addClass('basket-ntf-navbar-stick');
  };
});