$(document).ready(function () {
    $("#pages2").hide();
    $("#icon1").addClass("activeIcon");
    $("#icon1").click(function () {
        $("#icon1").addClass("activeIcon");
        $("#icon2").removeClass("activeIcon");
        $("#pages1").show();
        $("#pages2").hide();
        console.log("icon1 clicked")
    });
    $("#icon2").click(function () {
        $("#icon2").addClass("activeIcon");
        $("#icon1").removeClass("activeIcon");
        $("#pages1").hide();
        $("#pages2").show();
        $("#rightNav").hide();
        console.log("icon2 clicked")
    })

    $("#menuButton").click(function () {
        $("#rightNav").slideDown("800");
    })
    $("#rightNav").on('click', function () {
        $("#rightNav").slideUp("800");
    });
    $("#rightNav").hide();

    $("#icon2").click();
});