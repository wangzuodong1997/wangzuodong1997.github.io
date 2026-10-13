(function () {
  "use strict";

  $(function () {
    $(".menu-container").load("menu.html");

    $(".publications-container").load(
      "index.html #publications-list"
    );

    $(".talks-container").load(
      "index.html #talks-list"
    );
  });
})();