import "../styles/index.scss";

import "owl.carousel2/dist/assets/owl.carousel.css";
import $ from "jquery";
import "owl.carousel2";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
  // require("html-loader?interpolate!../index.html");
}

$(document).ready(function () {
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

  $(document).ready(function menu() {
    var $body = $("body"),
      $menu = $(".nav"),
      $burger = $(".burger"),
      $width = $(window).width(),
      $prew_width = $width;

    if ($width < 991) {
      $menu.hide();
    }
    if ($width >= 991) {
      $menu.show();
    }

    $("body").on("click", ".burger", function () {
      if (window.matchMedia("(max-width: 767px)")) {
        $menu.toggle();
        $burger.toggleClass("close_burger");
      }
    });
  });
});
