$(".owl-carousel").owlCarousel({
  margin: 25,
  // nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
  },
});

(function toggleMenu() {
  var $body = $("body"),
    $menu = $(".nav"),
    $burger = $(".burger"),
    $width = $(window).width(),
    $prew_width = $width;

  $("body").on("click", ".burger", function () {
    if (window.matchMedia("(max-width: 767px)")) {
      $menu.toggle();
      $burger.toggleClass("close_burger");
    }
  });
})();
