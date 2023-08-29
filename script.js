$(document).ready(function () {
  $(".desc").click(function () {
    val = $(this).siblings("h5").html();
    $(".modal-title").html(val);
    src = $(this).parent().siblings("img").attr("src");
    $(".modal-img").attr("src", src);
    $(".modal-desc").html($(this).siblings(".desc").html());
  });
});

$(document).ready(function () {
  $(".form").click(function () {
    val = $(this).siblings("h5").html();
  });
});

$(document).ready(function () {
  $(".Form_buy").click(function () {
    val = $(this).siblings("h5").html();
    $(".modal-title1").html(val);
    $("#ck").val(val.trim());
    src = $(this).parent().siblings("img").attr("src");
    $(".modal-img").attr("src", src);
    $(".modal-desc").html($(this).siblings(".desc").html());
  });
});

$(document).ready(function () {
  $(".form").click(function () {
    val = $(this).siblings("h5").html();
  });
});
