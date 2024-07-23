$(document).ready(function () {
  $(".game").on("click", function () {
    var imgSrc = $(this).find("img").attr("src");
    var title = $(this).find("h2").text();
    var description = $(this).data("description");

    $("#modal-img").attr("src", imgSrc);
    $("#modal-title").text(title);
    $("#modal-description").text(description);

    $("#modal").show();
  });

  $(".close").on("click", function () {
    $("#modal").hide();
  });

  $(window).on("click", function (event) {
    if (event.target.id == "modal") {
      $("#modal").hide();
    }
  });
});
