$(document).ready(function() {
    console.log("Let's get ready to party with Jquery!!!");
});

$("article img").addClass("image-center");
$("article p:last-child").remove();
var randomFontSize = Math.floor(Math.random () * 101);
$("#title").css("font-size", randomFontSize + "px");

$("ul").append("<li>This is the new item.</li>");

$("aside").empty().append("<p>We apologize for the list's existence.</p>");
$ ("input[type='number']").on("input", function() {
    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
});

$("article img").click(function() {
    $(this).remove();
});