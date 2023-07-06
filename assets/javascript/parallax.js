$(document).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".header-img-container").css("top", "0" + (scroll / 2) + "px");
});