$(document).ready(function () {

    $("#mouse").on("click", function () {
        $('html,body').animate({
            scrollTop: $(".about-us").offset().top
        }, 1000);
    });

    $(".layer").on("click", function () {
        alert("This section is coming soon!");
    });

});

