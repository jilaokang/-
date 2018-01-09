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
        console.log("icon2 clicked")
    })

    $("#menuButton").click(function () {
        $("#rightNav").fadeIn();
    })

    

    $("#rightNav").hide();
});