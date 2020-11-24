import "../styles/index.scss";

import "owl.carousel2/dist/assets/owl.carousel.css";
import $ from "jquery";
import "owl.carousel2";

import "./script.js";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
  // require("html-loader?interpolate!../index.html");
}
